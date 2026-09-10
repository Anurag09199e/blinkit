import fs from 'fs';
import { PRODUCTS } from './src/data/mockData';

const brokenIds = ["134", "143", "147", "150"];
const SAFE_URL = 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400';

let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');

for (const pid of brokenIds) {
    const product = PRODUCTS.find(p => p.id === pid);
    if (product) {
        const oldUrlRegex = new RegExp(product.image.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        content = content.replace(oldUrlRegex, SAFE_URL);
    }
}

// Bump migration version
content = content.replace(/migrated_50_fruits_veg_v2/g, 'migrated_50_fruits_veg_v3');
if (fs.existsSync('./src/services/productService.ts')) {
    let pService = fs.readFileSync('./src/services/productService.ts', 'utf-8');
    pService = pService.replace(/migrated_50_fruits_veg_v2/g, 'migrated_50_fruits_veg_v3');
    fs.writeFileSync('./src/services/productService.ts', pService);
}

fs.writeFileSync('./src/data/mockData.ts', content);
console.log('Fixed final IDs and bumped migration to v3');
