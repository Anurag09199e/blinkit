import { Product, PriceHistoryRecord } from '../types/product';
import { PRODUCTS as initialProducts } from '../data/mockData';

const STORAGE_KEYS = {
    PRODUCTS: 'blinkit_products_v1',
    PRICE_HISTORY: 'blinkit_price_history_v1',
};

// Internal Helper
const generateId = () => Math.random().toString(36).substr(2, 9);

export const ProductService = {
    // ---- Seed Initial Data ----
    seedInitialDataIfNeeded() {
        const existing = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        if (!existing) {
            // Map legacy mockData to new format safely
            const safeInitial: Product[] = initialProducts.map(p => ({
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
            }));

            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(safeInitial));
            localStorage.setItem(STORAGE_KEYS.PRICE_HISTORY, JSON.stringify([]));
        }
    },

    // ---- Products ----
    getAllProducts(): Product[] {
        this.seedInitialDataIfNeeded();
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
