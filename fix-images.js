import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

const brokenIds = ["104", "106", "108", "109", "110", "112", "113", "116", "117", "118", "119", "120", "121", "122", "124", "126", "127", "132", "133", "134", "135", "138", "141", "142", "143", "145", "147", "148", "150"];

async function getWikiImage(query) {
    // 1. search for title
    const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`);
    const searchData = await searchRes.json();
    if (!searchData.query.search || searchData.query.search.length === 0) return null;
    const title = searchData.query.search[0].title;

    // 2. get image for title
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400`);
    const data = await res.json();
    const pages = data.query.pages;
    const firstPage = Object.values(pages)[0];
    if (firstPage && firstPage.thumbnail) {
        return firstPage.thumbnail.source;
    }
    return null;
}

async function fixBrokenImages() {
    let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');

    for (const pid of brokenIds) {
        const product = PRODUCTS.find(p => p.id === pid);
        if (!product) continue;

        console.log(`Searching wiki for: ${product.name}`);
        try {
            const url = await getWikiImage(product.name);

            if (url) {
                console.log(`Found Wikipedia replacement: ${url}`);
                const oldUrlRegex = new RegExp(product.image.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                content = content.replace(oldUrlRegex, url);
            } else {
                console.log(`No match found in Wiki for ${product.name}`);
            }
        } catch (e) {
            console.log(`Error searching ${product.name}`);
        }
        await new Promise(r => setTimeout(r, 200));
    }

    fs.writeFileSync('./src/data/mockData.ts', content);
    console.log('Finished updating mockData.ts');
}

fixBrokenImages();
