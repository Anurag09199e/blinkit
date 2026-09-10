const fs = require('fs');

const DB_PRODUCTS = [
    'Potato chip', 'Tortilla chip', 'Popcorn', 'Pretzel', 'Corn chip', 'Pita chip', 'Plantain chip', 'Pork rind', 'Cheese puff', 'Trail mix',
    'Naan', 'Papadum', 'Samosa', 'Kachori', 'Mathri', 'Dhokla', 'Fafda', 'Jalebi', 'Bombay mix', 'Sev',
    'Peanut', 'Almond', 'Cashew', 'Walnut', 'Pistachio', 'Macadamia', 'Pecan', 'Hazelnut', 'Brazil nut', 'Pine nut',
    'Pumpkin seed', 'Sunflower seed', 'Lotus seed', 'Biscuit', 'Cookie', 'Cracker', 'Graham cracker', 'Saltine cracker', 'Rice cracker', 'Rice cake',
    'Granola bar', 'Protein bar', 'Fruit snack', 'Jerky', 'Gummy bear', 'Jelly bean', 'Chocolate bar', 'Marshmallow', 'Cotton candy', 'Chewing gum'
];

const FALLBACK_URL = 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400';

async function fetchWikiImage(title) {
    try {
        const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(title)}&utf8=&format=json`);
        const searchData = await searchRes.json();
        if (!searchData.query.search || searchData.query.search.length === 0) return FALLBACK_URL;

        const pageTitle = searchData.query.search[0].title;
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=400`);
        const data = await res.json();
        const pages = data.query.pages;
        const firstPage = Object.values(pages)[0];
        if (firstPage && firstPage.thumbnail) {
            return firstPage.thumbnail.source;
        }
    } catch (e) { }
    return FALLBACK_URL;
}

async function generateAndInject() {
    const products = [];
    let startId = 400; // start id at 400

    console.log("Fetching images for 50 items...");
    for (let i = 0; i < DB_PRODUCTS.length; i++) {
        let name = DB_PRODUCTS[i];
        let image = await fetchWikiImage(name);
        let price = Math.floor(Math.random() * 150) + 20;
        let originalPrice = price + Math.floor(Math.random() * 30) + 10;
        products.push({
            id: String(startId + i),
            name: name,
            weight: ['1 unit', '250 g', '500 g', '100 g', '1 packet'][Math.floor(Math.random() * 5)],
            price: price,
            originalPrice: originalPrice,
            categoryId: '3',
            image: image,
            isBestseller: Math.random() > 0.8
        });
        process.stdout.write('.');
    }
    console.log("\\nFinished.");

    let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');
    const stringified = JSON.stringify(products, null, 2);
    content += `\n\nexport const SNACKS_50: any[] = ${stringified};\n`;
    fs.writeFileSync('./src/data/mockData.ts', content);
    console.log("Patched mockData.ts");

    let pService = fs.readFileSync('./src/services/productService.ts', 'utf-8');
    const migrationCode = `
        // Category 3 50 Products Migration
        if (!localStorage.getItem('migrated_cat3_50_v2')) {
            // Import dynamically and bulk import it
            // Rather than trying to import in TS, let's just append to initialProducts natively in TS if we can,
            // or just use SNACKS_50 which is exported.
        }
    `;
    // For extreme simplicity, I won't write to productService here. I'll write another tool call to do it properly in TS natively using replace_file_content!
}

generateAndInject();
