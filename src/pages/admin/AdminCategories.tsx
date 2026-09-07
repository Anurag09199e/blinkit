import React from 'react';
import { CATEGORIES } from '../../data/mockData';

export const AdminCategories: React.FC = () => {
    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Categories</h1>
                    <p className="text-gray-500 mt-1 font-medium">Manage product groups.</p>
                </div>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Image</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">ID</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Name</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {CATEGORIES.map((cat) => (
                            <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <img src={cat.image} className="w-12 h-12 rounded object-cover shadow-sm bg-gray-100" alt={cat.name} />
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap font-medium text-gray-600">
                                    {cat.id}
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap font-bold text-gray-900">
                                    {cat.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
