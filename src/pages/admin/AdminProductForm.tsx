import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { ProductService } from '../../services/productService';
import { CATEGORIES } from '../../data/mockData';
import { ArrowLeft, Save } from 'lucide-react';
import { Product } from '../../types/product';

export const AdminProductForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { products, refreshProducts } = useProducts();

    // Check if editing
    const isEdit = Boolean(id);
    const existingP = products.find(p => p.id === id);

    const [formData, setFormData] = useState<Partial<Product>>({
        name: '',
        categoryId: '1',
        description: '',
        price: 0,
        mrp: 0,
        unit: '1 kg',
        image: '',
        stock: 0,
        isAvailable: true,
    });

    useEffect(() => {
        if (isEdit && existingP) {
            setFormData({ ...existingP });
        }
    }, [isEdit, existingP]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.image) return alert('Name and image are required');

        const productToSave: Product = {
            id: isEdit ? (id as string) : '',
            name: formData.name,
            categoryId: formData.categoryId || '1',
            description: formData.description || '',
            price: Number(formData.price) || 0,
            mrp: Number(formData.mrp) || 0,
            unit: formData.unit || '',
            image: formData.image || '',
            stock: Number(formData.stock) || 0,
            isAvailable: Boolean(formData.isAvailable),
        };

        ProductService.saveProduct(productToSave);
        refreshProducts();
        navigate('/admin/products');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                        {isEdit ? 'Edit Product' : 'Add Product'}
                    </h1>
                </div>
                <Link to="/admin/products" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 font-bold transition-colors">
                    <ArrowLeft size={20} /> Back
                </Link>
            </header>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900"
                                placeholder="e.g. Fresh Tomato"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                            <select
                                required
                                value={formData.categoryId}
                                onChange={e => setFormData({ ...formData, categoryId: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900 bg-white"
                            >
                                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>

                        {/* Unit */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Unit / Weight</label>
                            <input
                                type="text"
                                required
                                value={formData.unit}
                                onChange={e => setFormData({ ...formData, unit: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900"
                                placeholder="e.g. 1 kg or 500 ml"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Price (₹)</label>
                            <input
                                type="number"
                                required
                                min="0" step="0.01"
                                value={formData.price}
                                onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900"
                            />
                            {isEdit && existingP?.price !== formData.price && (
                                <p className="text-xs text-orange-600 mt-1 font-bold">This change will be logged in Price History.</p>
                            )}
                        </div>

                        {/* MRP */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">MRP (₹)</label>
                            <input
                                type="number"
                                min="0" step="0.01"
                                value={formData.mrp}
                                onChange={e => setFormData({ ...formData, mrp: parseFloat(e.target.value) })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-500"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Inventory Stock</label>
                            <input
                                type="number"
                                required min="0"
                                value={formData.stock}
                                onChange={e => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900"
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                            <input
                                type="url"
                                required
                                value={formData.image}
                                onChange={e => setFormData({ ...formData, image: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900"
                                placeholder="https://..."
                            />
                        </div>

                        {/* Description */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                            <textarea
                                rows={3}
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900"
                            />
                        </div>

                        {/* Availability Boolean */}
                        <div className="col-span-1 md:col-span-2 flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <input
                                type="checkbox"
                                id="isAvailable"
                                checked={formData.isAvailable}
                                onChange={e => setFormData({ ...formData, isAvailable: e.target.checked })}
                                className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500/20 cursor-pointer"
                            />
                            <label htmlFor="isAvailable" className="font-bold text-gray-900 cursor-pointer select-none">
                                Product is openly available for customers
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-4">
                    <Link
                        to="/admin/products"
                        className="px-6 py-2.5 rounded-xl font-bold bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
                    >
                        <Save size={18} />
                        {isEdit ? 'Save Changes' : 'Add Product'}
                    </button>
                </div>
            </form>
        </div>
    );
};
