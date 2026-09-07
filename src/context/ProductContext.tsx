import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types/product';
import { ProductService } from '../services/productService';

interface ProductContextProps {
    products: Product[];
    refreshProducts: () => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const refreshProducts = () => {
        setProducts(ProductService.getAllProducts());
    };

    useEffect(() => {
        // Init cache internally directly from storage service
        ProductService.seedInitialDataIfNeeded();
        refreshProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, refreshProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
