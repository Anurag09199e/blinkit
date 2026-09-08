import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from './LoginModal';

export const CartSidebar: React.FC = () => {
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartTotal } = useCart();
    const { user } = useAuth();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleCheckout = () => {
        if (!user) {
            setIsLoginModalOpen(true);
            return;
        }
        processCheckout();
    };

    const processCheckout = () => {
        const orderSummary = cart.map(item => `${item.quantity}x ${item.name}`).join('%0A');
        const totalAmount = cartTotal + 15;

        // Ensure we have the latest user data (avoiding stale closure if just logged in)
        let currentUser = user;
        if (!currentUser) {
            const savedUser = localStorage.getItem('blinkit_user');
            if (savedUser) {
                try {
                    currentUser = JSON.parse(savedUser);
                } catch (e) {
                    console.error("Failed to parse user from localStorage");
                }
            }
        }

        const message = `*New Order from Blinkit Clone*%0A%0A*Customer Details:*%0AName: ${currentUser?.name}%0APhone: ${currentUser?.phone}%0A%0A*Order Details:*%0A${orderSummary}%0A%0A*Total Amount:* ₹${totalAmount}`;

        window.open(`https://wa.me/918949636194?text=${message}`, '_blank');
        setIsLoginModalOpen(false);
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <ShoppingBag size={24} className="text-green-600" />
                        My Cart
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <ShoppingBag size={64} className="text-gray-300" />
                            </div>
                            <p className="text-lg font-medium text-gray-800">Your cart is empty</p>
                            <p className="text-sm">Start adding items to your cart!</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-4 bg-[#0c831f] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-[#0b741b] transition-colors"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-4 text-sm font-medium text-gray-800 bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <span className="text-xl">⏱️</span> Delivery in 10 minutes
                                </div>
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-lg px-2 transition-colors -mx-2">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain rounded-lg border border-gray-100 bg-white p-1"
                                        />
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</h4>
                                            <p className="text-xs text-gray-500 mb-2">{item.unit}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-gray-900">₹{item.price}</span>
                                                <div className="flex items-center bg-[#0c831f] text-white rounded-lg h-[30px] shadow-sm">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 h-full hover:bg-[rgba(0,0,0,0.1)] transition-colors flex items-center"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-2.5 text-sm font-bold min-w-[24px] text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 h-full hover:bg-[rgba(0,0,0,0.1)] transition-colors flex items-center"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Checkout */}
                {cart.length > 0 && (
                    <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-center mb-4 text-sm px-2">
                            <span className="text-gray-600">Handling Charge</span>
                            <span className="font-medium">₹15</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 text-sm px-2">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-medium text-green-600">FREE</span>
                        </div>

                        <button onClick={handleCheckout} className="w-full bg-[#0c831f] hover:bg-[#0b741b] text-white rounded-xl p-4 flex items-center justify-between font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                            <div className="flex flex-col items-start leading-tight">
                                <span>₹{cartTotal + 15}</span>
                                <span className="text-xs font-normal opacity-90 uppercase tracking-wide">Total</span>
                            </div>
                            <div className="flex items-center gap-2">
                                Checkout <ArrowRight size={20} />
                            </div>
                        </button>
                    </div>
                )}
            </div>
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onSuccess={processCheckout}
            />
        </>
    );
};
