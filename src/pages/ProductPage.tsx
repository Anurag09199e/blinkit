import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { Header } from '../components/Header';
import { CategoryNav } from '../components/CategoryNav';
import { CartSidebar } from '../components/CartSidebar';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/mockData';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { cart, addToCart, updateQuantity } = useCart();
    const { products } = useProducts();

    const product = products.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === product?.id);
    const quantity = cartItem?.quantity || 0;

    const suggestions = useMemo(() => {
        if (!product) return [];

        // Simple keyword extraction: ignore common adjectives
        const ignoreWords = ['fresh', 'premium', 'organic', 'raw', 'signature', 'delight', 'pack'];
        const nameWords = product.name.toLowerCase().split(' ').map(w => w.replace(/[^a-z]/g, ''));
        const keywords = nameWords.filter(w => w.length > 3 && !ignoreWords.includes(w));

        let matches = products.filter(p => {
            if (p.id === product.id) return false;
            const pName = p.name.toLowerCase();
            return keywords.some(kw => pName.includes(kw));
        });

        // Fallback to same category if no specific quality/variant is found
        if (matches.length === 0) {
            matches = products.filter(p => p.id !== product.id && p.categoryId === product.categoryId);
        }

        // Limit to 5 suggestions
        return matches.slice(0, 5);
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#f4f6f8] pb-20">
                <Header />
                <CategoryNav />
                <CartSidebar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                    <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
                    <Link to="/" className="mt-4 inline-block text-[#0c831f] hover:underline font-semibold">
                        Return to Home
                    </Link>
                </main>
            </div>
        );
    }

    const category = CATEGORIES.find(c => c.id === product.categoryId);

    return (
        <div className="min-h-screen bg-[#f4f6f8] pb-20">
            <Header />
            <CategoryNav />
            <CartSidebar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                {/* Breadcrumbs */}
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <Link to="/" className="hover:text-green-700">Home</Link>
                    <span>/</span>
                    {category && (
                        <>
                            <Link to={`/category/${category.id}`} className="hover:text-green-700">{category.name}</Link>
                            <span>/</span>
                        </>
                    )}
                    <span className="text-gray-800 line-clamp-1">{product.name}</span>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-sm">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex items-center justify-center p-4 bg-gray-50 rounded-xl relative">
                        {product.discount && (
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg shadow-sm">
                                {product.discount}
                            </div>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-[400px] h-auto object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2">
                            {product.name}
                        </h1>
                        <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                            <span>⏱️ 10 MINS</span>
                        </p>

                        <div className="text-gray-600 font-medium mb-1">Weight / Quantity</div>
                        <div className="text-sm border border-gray-200 rounded-lg px-4 py-2 inline-flex mb-8 bg-gray-50">
                            {product.unit}
                        </div>

                        <div className="flex items-center justify-between mt-auto bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs mb-1">MRP</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                                    {product.mrp && product.mrp > product.price && (
                                        <span className="text-sm text-gray-400 line-through mb-1">₹{product.mrp}</span>
                                    )}
                                </div>
                                <span className="text-[10px] text-gray-400 mt-1">(Inclusive of all taxes)</span>
                            </div>

                            {quantity === 0 ? (
                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={!product.isAvailable || product.stock === 0}
                                    className={`px-10 py-3 rounded-xl text-lg font-bold transition-colors shadow-md ${(!product.isAvailable || product.stock === 0) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-white bg-[#0c831f] hover:bg-[#0b741b]'}`}
                                >
                                    ADD
                                </button>
                            ) : (
                                <div className="flex items-center justify-between bg-[#0c831f] text-white rounded-xl h-[52px] w-[140px] overflow-hidden shadow-md">
                                    <button
                                        onClick={() => updateQuantity(product.id, quantity - 1)}
                                        className="h-full w-12 hover:bg-[#0b741b] transition-colors flex items-center justify-center"
                                    >
                                        <Minus size={20} />
                                    </button>
                                    <span className="text-lg font-bold">{quantity}</span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="h-full w-12 hover:bg-[#0b741b] transition-colors flex items-center justify-center"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Suggestions Section */}
                {suggestions.length > 0 && (
                    <section className="mt-16">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">You might also like</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {suggestions.map(suggestion => (
                                <ProductCard key={suggestion.id} product={suggestion} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Footer minimal */}
            <footer className="bg-white border-t border-gray-200 py-12 mt-16">
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
