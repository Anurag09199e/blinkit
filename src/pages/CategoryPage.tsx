import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { CategoryNav } from '../components/CategoryNav';
import { CartSidebar } from '../components/CartSidebar';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/mockData';
import { useProducts } from '../context/ProductContext';

export const CategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProducts();

    const category = CATEGORIES.find(c => c.id === id);
    const categoryProducts = products.filter(p => p.categoryId === id);

    if (!category) {
        return (
            <div className="min-h-screen bg-[#f4f6f8] pb-20">
                <Header />
                <CategoryNav />
                <CartSidebar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                    <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
                    <Link to="/" className="mt-4 inline-block text-[#0c831f] hover:underline font-semibold">
                        Return to Home
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f6f8] pb-20">
            <Header />
            <CategoryNav />
            <CartSidebar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-xl object-cover shadow-sm bg-white"
                    />
                    <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                        {category.name}
                    </h1>
                </div>

                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {categoryProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        No products available in this category.
                    </div>
                )}
            </main>

            {/* Footer minimal */}
            <footer className="bg-white border-t border-gray-200 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p className="font-medium">India's last minute app</p>
                    <p className="mt-2 text-sm">&copy; 2026 Blinkit Clone. Developed using React & Vite.</p>
                </div>
            </footer>
        </div>
    );
};
