import React, { useState, useEffect } from 'react';
import { ProductService } from '../../services/productService';
import { PriceHistoryRecord } from '../../types/product';
import { History, TrendingUp, TrendingDown } from 'lucide-react';

export const AdminPriceHistory: React.FC = () => {
    const [history, setHistory] = useState<PriceHistoryRecord[]>([]);

    useEffect(() => {
        setHistory(ProductService.getPriceHistory());
    }, []);

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Price History</h1>
                    <p className="text-gray-500 mt-1 font-medium">Automatic log of all historical pricing alterations.</p>
                </div>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Date/Time</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Product Name</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Old Price</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">New Price</th>
                            <th className="px-6 py-4 font-bold tracking-wider text-gray-500">Change Trend</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {history.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                    <History className="mx-auto text-gray-400 mb-2" size={32} />
                                    No price modifications have been tracked yet.
                                </td>
                            </tr>
                        ) : (
                            history.map(record => {
                                const diff = record.newPrice - record.oldPrice;
                                const isIncrease = diff > 0;

                                return (
                                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-3 whitespace-nowrap text-gray-500">
                                            {new Date(record.changedAt).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-3 font-bold text-gray-900">
                                            {record.productName}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap font-medium text-gray-400 line-through">
                                            ₹{record.oldPrice}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap font-black text-gray-900">
                                            ₹{record.newPrice}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap font-bold">
                                            {isIncrease ? (
                                                <span className="text-red-500 inline-flex items-center gap-1">
                                                    <TrendingUp size={16} /> +₹{diff.toFixed(2)}
                                                </span>
                                            ) : (
                                                <span className="text-green-500 inline-flex items-center gap-1">
                                                    <TrendingDown size={16} /> -₹{Math.abs(diff).toFixed(2)}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
