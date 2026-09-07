import React, { useState, useRef } from 'react';
import { useProducts } from '../../context/ProductContext';
import { ProductService } from '../../services/productService';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Upload, AlertCircle, Plus } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';
import { Product } from '../../types/product';

export const AdminProducts: React.FC = () => {
    const { products, refreshProducts } = useProducts();
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Filters
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState(''); // 'available', 'unavailable', 'low-stock'

    const handleDelete = (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            ProductService.deleteProduct(id);
            refreshProducts();
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                const rows = text.split('\n').map(row => row.trim()).filter(Boolean);

                // Assuming format: id,name,category,description,price,mrp,unit,image,stock,isAvailable
                // Skip header logic? Let's aggressively slice if first column says 'id'
                const startIdx = rows[0].toLowerCase().startsWith('id') ? 1 : 0;
                const newProducts: Product[] = [];

                for (let i = startIdx; i < rows.length; i++) {
                    const columns = rows[i].split(',').map(c => c.trim());
                    if (columns.length >= 10) {
                        newProducts.push({
                            id: columns[0],
                            name: columns[1],
                            categoryId: CATEGORIES.find(c => c.name.toLowerCase() === columns[2].toLowerCase())?.id || '1',
                            description: columns[3],
                            price: parseFloat(columns[4]) || 0,
                            mrp: parseFloat(columns[5]) || 0,
                            unit: columns[6],
                            image: columns[7],
                            stock: parseInt(columns[8]) || 0,
                            isAvailable: columns[9].toLowerCase() === 'true',
                        });
                    }
                }

                if (newProducts.length > 0) {
                    const result = ProductService.bulkImportProducts(newProducts);
                    alert(`Import Success! Added ${result.appendedCount} new, Updated ${result.updatedCount} existing products.`);
                    refreshProducts();
                } else {
                    alert('No valid rows found in CSV. Expected: id,name,category,description,price,mrp,unit,image,stock,isAvailable');
                }
            } catch (err) {
                console.error(err);
                alert("Failed to parse CSV. Ensure it follows the required format.");
            }
            // Reset input
            if (fileInputRef.current) fileInputRef.current.value = "";
        };
        reader.readAsText(file);
    };

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter ? p.categoryId === categoryFilter : true;

        let matchesStatus = true;
        if (statusFilter === 'available') matchesStatus = p.isAvailable && p.stock > 0;
        if (statusFilter === 'unavailable') matchesStatus = !p.isAvailable || p.stock === 0;
        if (statusFilter === 'low-stock') matchesStatus = p.stock > 0 && p.stock <= 10;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <div className="space-y-6 flex flex-col h-full animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Products</h1>
                    <p className="text-gray-500 mt-1 font-medium">Manage catalog, bulk import, and edit inventory.</p>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        type="file"
                        accept=".csv"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold shadow-sm transition-colors text-sm"
                    >
                        <Upload size={18} />
                        Import CSV
                    </button>
                    <Link
                        to="/admin/products/add"
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold shadow-sm transition-colors text-sm"
                    >
                        <Plus size={18} />
                        Add Product
                    </Link>
                </div>
            </header>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search products by name..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                />
                <select
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-sm"
                >
                    <option value="">All Categories</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-sm"
                >
                    <option value="">All Statuses</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Out of Stock</option>
                    <option value="low-stock">Low Stock (≤10)</option>
                </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Image</th>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Product Name</th>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Price (₹)</th>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Stock</th>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Status</th>
                                <th className="px-6 py-4 font-bold tracking-wider text-gray-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        <AlertCircle className="mx-auto text-gray-400 mb-2" size={32} />
                                        No products found matching filters.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map(product => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <img src={product.image} className="w-10 h-10 rounded-md object-contain bg-gray-50 border border-gray-100 p-1" alt={product.name} />
                                        </td>
                                        <td className="px-6 py-3">
                                            <div className="font-bold text-gray-900 mb-0.5">{product.name}</div>
                                            <div className="text-xs text-gray-500">{product.unit}</div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="font-bold text-gray-900">{product.price}</div>
                                            {product.mrp && product.mrp > product.price && (
                                                <div className="text-[10px] text-gray-400 line-through">{product.mrp}</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <span className={`font-semibold ${product.stock <= 10 ? 'text-orange-600' : 'text-gray-900'}`}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {product.isAvailable && product.stock > 0 ? (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                                                    Available
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-800">
                                                    Disabled / OOS
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-right space-x-3">
                                            <Link to={`/admin/products/edit/${product.id}`} className="text-blue-600 hover:text-blue-900 font-semibold inline-flex items-center gap-1 transition-colors">
                                                <Edit size={16} /> Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id, product.name)}
                                                className="text-red-500 hover:text-red-700 font-semibold inline-flex items-center gap-1 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
