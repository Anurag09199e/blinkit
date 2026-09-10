import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

const titles = ['Peach', 'Plum', 'Sapodilla', 'Coconut', 'Sugar-apple', 'Lychee', 'Sweet_lime', 'Muskmelon', 'Kiwifruit'];

const fruitMap = {
    'Peach': '141',
    'Plum': '142',
    'Sapodilla': '143', // Chikoo
    'Coconut': '145',
    'Sugar-apple': '147', // Custard Apple
    'Lychee': '148',
    'Sweet_lime': '150', // Mosambi
    'Muskmelon': '134',
    'Kiwifruit': '138'
};

async function run() {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${titles.join('|')}&prop=pageimages&format=json&pithumbsize=400`);
    const data = await res.json();

    let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');

    for (const page of Object.values(data.query.pages)) {
        if (page.thumbnail) {
            const title = page.title.replace(' ', '_');
            // Find corresponding fruit ID
            const matchedTitle = Object.keys(fruitMap).find(k => k.toLowerCase() === title.toLowerCase() || k.toLowerCase().replace('_', ' ') === title.toLowerCase());
            if (matchedTitle) {
                const pid = fruitMap[matchedTitle];
                const product = PRODUCTS.find(p => p.id === pid);
                if (product) {
                    const url = page.thumbnail.source;
                    console.log(`Updating ${product.name} with ${url}`);
                    const oldUrlRegex = new RegExp(product.image.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                    content = content.replace(oldUrlRegex, url);
                }
            }
        }
    }

    fs.writeFileSync('./src/data/mockData.ts', content);
    console.log("Done");
}

run();
