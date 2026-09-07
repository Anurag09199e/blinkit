import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';

export const CategoryNav: React.FC = () => {
    return (
        <div className="py-6 px-4 bg-white mb-6 sticky top-20 z-40 shadow-sm border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto scrollbar-hide pb-2">
                {CATEGORIES.map((category) => (
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}
                        className="flex flex-col items-center gap-2 cursor-pointer group min-w-[72px]"
                    >
                        <div className="w-[72px] h-[72px] rounded-2xl bg-[#ecf7ed] overflow-hidden group-hover:shadow-md transition-all duration-300 border border-green-100/50">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight group-hover:text-green-700 transition-colors">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
