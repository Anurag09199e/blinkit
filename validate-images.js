import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

async function checkImages() {
    const broken = [];
    for (const product of PRODUCTS) {
        try {
            const response = await fetch(product.image, { method: 'HEAD' });
            if (!response.ok) {
                console.log(`❌ Broken: ${product.name} - ${product.image} (${response.status})`);
                broken.push(product.name);
            } else {
                console.log(`✅ OK: ${product.name}`);
            }
        } catch (e) {
            console.log(`❌ Error fetching ${product.name}: ${e.message}`);
            broken.push(product.name);
        }
        // Small delay to avoid rate limits
        await new Promise(res => setTimeout(res, 100));
    }
    console.log(`Finished. Total broken: ${broken.length}`);
    if (broken.length > 0) {
        console.log(`Broken items:`, broken);
    }
}

checkImages();
