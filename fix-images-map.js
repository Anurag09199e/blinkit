import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

const map = {
    "Green Peas": "Pea",
    "Mint": "Peppermint",
    "Lady Finger": "Okra",
    "Brinjal": "Eggplant",
    "Bottle Gourd": "Calabash",
    "Bitter Gourd": "Momordica_charantia",
    "Lemon": "Lemon",
    "Ridge Gourd": "Luffa",
    "Apple": "Apple",
    "Muskmelon": "Muskmelon",
    "Kiwi": "Kiwifruit",
    "Peach": "Peach",
    "Plum": "Plum",
    "Chikoo": "Sapodilla",
    "Coconut": "Coconut",
    "Custard Apple": "Sugar-apple",
    "Litchi": "Lychee",
    "Mosambi": "Sweet_lime"
};

async function getWikiImage(title) {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400`);
    const data = await res.json();
    const pages = data.query.pages;
    const firstPage = Object.values(pages)[0];
    if (firstPage && firstPage.thumbnail) {
        return firstPage.thumbnail.source;
    }
    return null;
}

async function fixImagesMap() {
    let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');

    for (const [name, wikiTitle] of Object.entries(map)) {
        const product = PRODUCTS.find(p => p.name === name);
        if (!product) continue;

        console.log(`Searching wiki mapped: ${wikiTitle} for ${name}`);
        try {
            const url = await getWikiImage(wikiTitle);

            if (url) {
                console.log(`Found Wikipedia replacement: ${url}`);
                const oldUrlRegex = new RegExp(product.image.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                content = content.replace(oldUrlRegex, url);
            } else {
                console.log(`No match found in Wiki for ${wikiTitle}`);
            }
        } catch (e) {
            console.log(`Error searching ${name}`);
        }
        await new Promise(r => setTimeout(r, 200));
    }

    fs.writeFileSync('./src/data/mockData.ts', content);
    console.log('Finished updating mockData.ts with manual maps');
}

fixImagesMap();
