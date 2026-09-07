import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, PlusCircle, ListTree, History, Home } from 'lucide-react';

export const AdminLayout: React.FC = () => {
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Products', href: '/admin/products', icon: Package },
        { name: 'Add Product', href: '/admin/products/add', icon: PlusCircle },
        { name: 'Categories', href: '/admin/categories', icon: ListTree },
        { name: 'Price History', href: '/admin/price-history', icon: History },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-100 mb-6">
                    <span className="text-xl font-black text-gray-900 tracking-tight">⚙️ Admin Panel</span>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <Icon size={20} className={isActive ? 'text-blue-700' : 'text-gray-400'} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 hover:underline">
                        <Home size={16} />
                        Return to Store
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};
