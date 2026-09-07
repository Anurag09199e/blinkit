import React from 'react';
import { ShoppingCart, Search, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
    const { itemCount, cartTotal, setIsCartOpen } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-3xl font-extrabold text-[#f8cb46] tracking-tight">blinkit</h1>
                    </div>

                    {/* Location */}
                    <div className="hidden md:flex flex-col flex-shrink-0 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center text-sm font-bold text-gray-800">
                            Delivery in 10 minutes
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                            <MapPin size={12} className="mr-1" />
                            <span>Select Location</span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl px-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-green-600 focus:border-green-600 sm:text-sm transition-all shadow-inner"
                                placeholder="Search for 'atta dal'"
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center justify-end flex-shrink-0 gap-4">
                        <button className="hidden sm:flex text-gray-600 hover:text-gray-900 font-medium text-sm">
                            Login
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="bg-[#0c831f] hover:bg-[#0b741b] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
                        >
                            <ShoppingCart size={20} />
                            {itemCount > 0 ? (
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] opacity-90">{itemCount} items</span>
                                    <span className="text-sm">₹{cartTotal}</span>
                                </div>
                            ) : (
                                <span>My Cart</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
