import React from 'react';
import { Header } from '../components/Header';
import { CategoryNav } from '../components/CategoryNav';
import { BannerSlider } from '../components/BannerSlider';
import { ProductCard } from '../components/ProductCard';
import { CartSidebar } from '../components/CartSidebar';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

export const Home: React.FC = () => {
    const { products } = useProducts();

    // Group products for different sections
    const bestsellers = products.filter(p => p.isBestseller);
    const dairyProducts = products.filter(p => p.categoryId === '2');
    const snacks = products.filter(p => p.categoryId === '3');

    return (
        <div className="min-h-screen bg-[#f4f6f8] pb-20">
            <Header />
            <CategoryNav />
            <CartSidebar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BannerSlider />

                {/* Bestsellers Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Bestsellers</h2>
                        <button className="text-[#0c831f] font-semibold text-sm hover:underline">See all</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {bestsellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Dairy & Breakfast Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Dairy & Breakfast</h2>
                        <Link to="/category/2" className="text-[#0c831f] font-semibold text-sm hover:underline">See all</Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {dairyProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Snacks Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Snacks & Munchies</h2>
                        <Link to="/category/3" className="text-[#0c831f] font-semibold text-sm hover:underline">See all</Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {snacks.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer minimal */}
            <footer className="bg-white border-t border-gray-200 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p className="font-medium text-gray-800">India's last minute app</p>
                    <div className="flex justify-center gap-6 my-6">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="text-sm">&copy; 2026 Blinkit Clone. Developed using React & Vite.</p>
                </div>
            </footer>
        </div>
    );
};
