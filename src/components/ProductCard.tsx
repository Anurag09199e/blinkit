import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cart, addToCart, updateQuantity } = useCart();
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem?.quantity || 0;

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-3 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative group flex flex-col h-full">
            {product.discount && (
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg rounded-tl-lg z-10 shadow-sm">
                    {product.discount}
                </div>
            )}

            <Link to={`/product/${product.id}`} className="block relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-gray-100/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-medium text-gray-600 flex items-center gap-1 border border-gray-200 shadow-sm">
                    {(!product.isAvailable || product.stock === 0) ? '🚫 OUT OF STOCK' : '⏱️ 10 MINS'}
                </div>
            </Link>

            <div className="flex-1 flex flex-col">
                <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-green-700 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-gray-500 text-xs mb-3">{product.unit}</p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                        {product.mrp && product.mrp > product.price && (
                            <span className="text-[10px] text-gray-400 line-through">₹{product.mrp}</span>
                        )}
                    </div>

                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart(product)}
                            disabled={!product.isAvailable || product.stock === 0}
                            className={`px-6 py-1.5 rounded-lg text-sm font-bold transition-colors shadow-sm ${(!product.isAvailable || product.stock === 0) ? 'text-gray-400 border border-gray-300 bg-gray-100 cursor-not-allowed' : 'text-[#0c831f] border border-[#0c831f] bg-green-50/50 hover:bg-green-100'}`}
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex items-center bg-[#0c831f] text-white rounded-lg h-[34px] overflow-hidden shadow-sm">
                            <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="px-2 h-full hover:bg-[#0b741b] transition-colors flex items-center justify-center"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="px-2 text-sm font-bold min-w-[24px] text-center">{quantity}</span>
                            <button
                                onClick={() => addToCart(product)}
                                className="px-2 h-full hover:bg-[#0b741b] transition-colors flex items-center justify-center"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
