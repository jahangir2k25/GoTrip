import React from "react";
import HeroCar from '../assets/heroCar.png';

const Card = ({
    title = 'Mercedes-Benz E-Class',
    location = 'Heathrow Airport',
    tag = 'LUXURY',
    seats = 4,
    bags = 1,
    transmission = 'Automatic',
    mileage = 'Unlimited',
    rating = 4.8,
    reviews = 3014,
    price = 72,
    image = HeroCar,
    
} = {}) => {

    return (
        <article className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-44 object-cover bg-gray-100"
                />
                {/* favorite badge */}
                <button
                    aria-label="save to favorites"
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>

            <div className="p-4">
                <div className="text-xs text-gray-400 mb-1">{location} • <span className="uppercase font-medium">{tag}</span></div>

                <h3 className="text-gray-900 font-semibold text-lg leading-tight">{title} <span className="text-sm text-gray-500 font-normal">or similar</span></h3>

                <ul className="mt-3 flex gap-4 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6zM3 7a1 1 0 011-1h16a1 1 0 011 1v1H3V7z" /></svg>
                        <span>{seats}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zM6 7h12v2H6V7zM4 11h16v8H4v-8z" /></svg>
                        <span>{bags}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14v2H5z" /></svg>
                        <span>{transmission}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
                        <span>{mileage}</span>
                    </li>
                </ul>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 text-sm font-semibold">{rating}</div>
                        <div className="text-sm text-gray-500">Exceptional • {reviews.toLocaleString()}</div>
                    </div>

                    <div className="text-right">
                        <div className="text-sm text-gray-600">USD</div>
                        <div className="text-lg font-semibold">${price} <span className="text-sm font-normal text-gray-500">total</span></div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;