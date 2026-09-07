import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { Package, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
    const { products } = useProducts();

    const totalProducts = products.length;
    const availableProducts = products.filter(p => p.isAvailable && p.stock > 0).length;
    const outOfStock = products.filter(p => p.stock === 0 || !p.isAvailable).length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock <= 10).length;

    const statCards = [
        { title: 'Total Products', value: totalProducts, icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Available', value: availableProducts, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
        { title: 'Out of Stock', value: outOfStock, icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
        { title: 'Low Stock', value: lowStock, icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <header>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-gray-500 mt-2 font-medium">Welcome back, monitor your quick-commerce store below.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
                        </div>
                        <div className={`p-4 rounded-xl ${stat.bg}`}>
                            <stat.icon className={stat.color} size={28} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Tips / Info Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions & Help</h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        <strong className="text-gray-900">Price Updates:</strong> Changes to MRP or Current Price are instantly pushed to the frontend, and logged automatically inside the Price History tab.
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-900">Out of Stock:</strong> Setting an item's stock to 0 or unchecking its availability will immediately disable its 'Add' button on the main storefront.
                    </p>
                </div>
            </div>
        </div>
    );
};
