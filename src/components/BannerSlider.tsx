import React from 'react';
import { BANNERS } from '../data/mockData';

export const BannerSlider: React.FC = () => {
    return (
        <div className="w-full mt-4 mb-8 overflow-hidden rounded-xl">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-4 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.02)]">
                {BANNERS.map((banner) => (
                    <div
                        key={banner.id}
                        className="snap-center shrink-0 w-full md:w-[80%] lg:w-[60%] aspect-[21/9] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={banner.image}
                            alt="Promotional Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
