const fs = require('fs');

const IMAGES = [
    'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400', // Chips 1
    'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400', // Chips 2
    'https://images.unsplash.com/photo-1566478989037-ebee17046f20?auto=format&fit=crop&q=80&w=400', // Snacks assorted
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', // Cookies
    'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400', // Nuts 1
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400', // Sweets
    'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=400', // Nachos
    'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=400', // Pretzels
    'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400', // Namkeen
    'https://images.unsplash.com/photo-1582283086196-ad73e659b8eb?auto=format&fit=crop&q=80&w=400'  // Savory
];

const DB_PRODUCTS = [
    'Lays Classic', 'Kurkure Masala Munch', 'Bingo Mad Angles', 'Doritos Nacho Cheese', 'Haldiram Bhujia', 'Moong Dal', 'Aloo Bhujia', 'Roasted Peanuts', 'Makhana', 'Cheese Popcorn',
    'Butter Popcorn', 'Caramel Popcorn', 'Punjabi Samosa', 'Kachori', 'Mathri', 'Dhokla', 'Fafda', 'Jalebi', 'Bombay Mix', 'Sev',
    'Salted Peanuts', 'Almonds', 'Cashews', 'Walnuts', 'Pistachios', 'Macadamia Nuts', 'Pecans', 'Hazelnuts', 'Brazil Nuts', 'Pine Nuts',
    'Pumpkin Seeds', 'Sunflower Seeds', 'Lotus Seeds', 'Marie Biscuit', 'Chocolate Chip Cookie', 'Crackers', 'Graham Crackers', 'Saltine Crackers', 'Rice Crackers', 'Rice Cakes',
    'Granola Bar', 'Protein Bar', 'Fruit Snacks', 'Beef Jerky', 'Gummy Bears', 'Jelly Beans', 'Chocolate Bar', 'Marshmallows', 'Cotton Candy', 'Chewing Gum'
];

function generateAndInject() {
    const products = [];
    let startId = 400; // start id at 400

    console.log("Generating 50 items...");
    for (let i = 0; i < DB_PRODUCTS.length; i++) {
        let name = DB_PRODUCTS[i];
        let price = Math.floor(Math.random() * 150) + 20;
        let originalPrice = price + Math.floor(Math.random() * 30) + 10;

        let imgIdx = i % 10;
        if (name.includes('Popcorn') || name.includes('Dorito') || name.includes('Lay')) imgIdx = 0;
        if (name.includes('Nut') || name.includes('Almond') || name.includes('Cashew')) imgIdx = 4;
        if (name.includes('Cookie') || name.includes('Crack')) imgIdx = 3;
        if (name.includes('Samosa') || name.includes('Sev') || name.includes('Bhujia')) imgIdx = 8;

        let image = IMAGES[imgIdx];

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
    }

    let content = fs.readFileSync('./src/data/mockData.ts', 'utf-8');
    const stringified = JSON.stringify(products, null, 2);

    // Inject at the end of the file as SNACKS_50
    if (!content.includes('SNACKS_50')) {
        content += \`\n\nexport const SNACKS_50 = \${stringified};\n\`;
         fs.writeFileSync('./src/data/mockData.ts', content);
         console.log("Appended SNACKS_50 to mockData.ts");
    }
    
    let pService = fs.readFileSync('./src/services/productService.ts', 'utf-8');
    
    // Add migration if doesn't exist. We just read SNACKS_50 dynamically by appending it to the initial load
    const migrationCode = \`
        // Category 3 50 Products Migration V3
        if (!localStorage.getItem('migrated_cat3_50_v3')) {
            localStorage.setItem('migrated_cat3_50_v3', 'true');
            // Hardcode the snippet since it's an isolated migration
            const snacks50 = \${stringified};
            const mappedSnacks = snacks50.map((p: any) => this.mapMockDataToProduct(p));
            this.bulkImportProducts(mappedSnacks);
        }
\`;

    if (!pService.includes('migrated_cat3_50_v3')) {
        pService = pService.replace(/(const data = localStorage\\.getItem\\(STORAGE_KEYS\\.PRODUCTS\\);)/, migrationCode + '\n        $1');
        fs.writeFileSync('./src/services/productService.ts', pService);
        console.log("Patched productService.ts");
    }
}

generateAndInject();
