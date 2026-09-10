import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

async function checkImages() {
    const broken = [];
    for (const product of PRODUCTS) {
        try {
            const response = await fetch(product.image, { method: 'HEAD' });
            if (!response.ok) {
                broken.push(product.id + ":" + product.name);
            }
        } catch (e) {
            broken.push(product.id + ":" + product.name);
        }
    }
    fs.writeFileSync('broken.json', JSON.stringify(broken));
}

checkImages();
