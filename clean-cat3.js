import fs from 'fs';

// 1. Clean mockData.ts
let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');

// Regex to remove any product object that has categoryId: '3' or "3"
// This matches { ... "categoryId": "3" ... } or { ... categoryId: '3' ... }
// We have to be careful since they cross multiple lines in MORE_PRODUCTS.
// Actually, it's safer to just eval or parse, but since it's TS, let's use a simpler approach.
// I will just use a regex that matches the block from `{` to `},` containing category 3.
const regexSingleLine = /\s*{\s*(?:'id'|"id"|id):\s*(?:'[^']+'|"[^"]+").*?(?:'categoryId'|"categoryId"|categoryId):\s*(?:'3'|"3").*?},?/g;
content = content.replace(regexSingleLine, '');

const regexMultiLine = /\s*{\s*(?:'id'|"id"|id):\s*(?:'[^']+'|"[^"]+")[^{}]*(?:'categoryId'|"categoryId"|categoryId):\s*(?:'3'|"3")[^{}]*},?/g;
content = content.replace(regexMultiLine, '');

fs.writeFileSync('./src/data/mockData.ts', content);

// 2. Add local storage deletion migration to productService.ts
let pService = fs.readFileSync('./src/services/productService.ts', 'utf-8');
const migrationCode = `
        // Delete category 3 migration
        if (!localStorage.getItem('deleted_cat3_v1')) {
            let currentData = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS) || '[]');
            currentData = currentData.filter((p: any) => p.categoryId !== '3');
            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(currentData));
            localStorage.setItem('deleted_cat3_v1', 'true');
        }
`;

if (!pService.includes('deleted_cat3_v1')) {
    pService = pService.replace(/(const data = localStorage\.getItem\(STORAGE_KEYS\.PRODUCTS\);)/, migrationCode + '\n        $1');
    fs.writeFileSync('./src/services/productService.ts', pService);
}

console.log('Done cleaning category 3');
