export interface Product {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    price: number;
    mrp: number;
    unit: string;
    image: string;
    stock: number;
    isAvailable: boolean;
    createdAt?: string;
    updatedAt?: string;
    // Keep these optional so old components don't randomly explode, but admin won't explicitly manage them yet
    discount?: string;
    isBestseller?: boolean;
}

export interface PriceHistoryRecord {
    id: string;
    productId: string;
    productName: string;
    oldPrice: number;
    newPrice: number;
    changedAt: string;
}
