import { Product, PriceHistoryRecord } from '../types/product';
import { PRODUCTS as initialProducts, SNACKS_50 } from '../data/mockData';

const STORAGE_KEYS = {
    PRODUCTS: 'blinkit_products_v2',
    PRICE_HISTORY: 'blinkit_price_history_v2',
};

// Internal Helper
const generateId = () => Math.random().toString(36).substr(2, 9);

export const ProductService = {
    // Internal mapping helper
    mapMockDataToProduct(p: any): Product {
        return {
            id: p.id,
            name: p.name,
            categoryId: p.categoryId,
            description: p.name + ' description',
            price: p.price,
            mrp: p.originalPrice || p.price,
            unit: p.weight || '1 unit',
            image: p.image,
            stock: 50,
            isAvailable: true,
            discount: p.discount,
            isBestseller: p.isBestseller,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
    },

    // ---- Seed Initial Data ----
    seedInitialDataIfNeeded() {
        const existing = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        const parsed = existing ? JSON.parse(existing) : null;
        if (!parsed || parsed.length === 0) {
            // Map legacy mockData to new format safely
            const safeInitial: Product[] = initialProducts.map(p => this.mapMockDataToProduct(p));

            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(safeInitial));
            localStorage.setItem(STORAGE_KEYS.PRICE_HISTORY, JSON.stringify([]));
        }
    },

    // ---- Products ----
    getAllProducts(): Product[] {
        this.seedInitialDataIfNeeded();

        // V4 Migration
        if (!localStorage.getItem('migrated_50_categories_v4')) {
            localStorage.setItem('migrated_50_categories_v4', 'true');
            // We know the initialProducts array in mockData.ts now contains everything including the new 50!
            const mappedInitial = initialProducts.map(p => this.mapMockDataToProduct(p));
            this.bulkImportProducts(mappedInitial);
        }

        // V5 Migration Snacks
        if (!localStorage.getItem('migrated_snacks_50_v5')) {
            localStorage.setItem('migrated_snacks_50_v5', 'true');
            const mappedSnacks = SNACKS_50.map(p => this.mapMockDataToProduct(p));
            this.bulkImportProducts(mappedSnacks);
        }


        // Delete category 3 migration
        if (!localStorage.getItem('deleted_cat3_v1')) {
            let currentData = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS) || '[]');
            currentData = currentData.filter((p: any) => p.categoryId !== '3');
            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(currentData));
            localStorage.setItem('deleted_cat3_v1', 'true');
        }

        const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        return data ? JSON.parse(data) : [];
    },

    saveProduct(product: Product) {
        const products = this.getAllProducts();
        const index = products.findIndex(p => p.id === product.id);
        const now = new Date().toISOString();

        let oldPrice: number | null = null;

        if (index > -1) {
            oldPrice = products[index].price;
            products[index] = { ...product, updatedAt: now };
        } else {
            product.id = product.id || generateId();
            product.createdAt = now;
            product.updatedAt = now;
            products.unshift(product);
        }

        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));

        // Create history log if price was changed
        if (oldPrice !== null && oldPrice !== product.price) {
            this.logPriceChange({
                id: generateId(),
                productId: product.id,
                productName: product.name,
                oldPrice,
                newPrice: product.price,
                changedAt: now
            });
        }
    },

    deleteProduct(id: string) {
        let products = this.getAllProducts();
        products = products.filter(p => p.id !== id);
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    },

    deleteAllProducts() {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify([]));
    },

    bulkImportProducts(newProducts: Product[]) {
        const products = this.getAllProducts();
        const now = new Date().toISOString();
        let appendedCount = 0;
        let updatedCount = 0;

        newProducts.forEach(newP => {
            const index = products.findIndex(p => p.id === newP.id);
            if (index > -1) {
                // Determine price change logging
                const oldPrice = products[index].price;
                products[index] = { ...newP, updatedAt: now };
                if (oldPrice !== newP.price) {
                    this.logPriceChange({
                        id: generateId(),
                        productId: newP.id,
                        productName: newP.name,
                        oldPrice,
                        newPrice: newP.price,
                        changedAt: now
                    });
                }
                updatedCount++;
            } else {
                newP.createdAt = now;
                newP.updatedAt = now;
                products.push(newP);
                appendedCount++;
            }
        });

        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
        return { appendedCount, updatedCount };
    },

    // ---- Price History ----
    logPriceChange(record: PriceHistoryRecord) {
        const history = this.getPriceHistory();
        history.unshift(record);
        localStorage.setItem(STORAGE_KEYS.PRICE_HISTORY, JSON.stringify(history));
    },

    getPriceHistory(): PriceHistoryRecord[] {
        const data = localStorage.getItem(STORAGE_KEYS.PRICE_HISTORY);
        return data ? JSON.parse(data) : [];
    }
};
