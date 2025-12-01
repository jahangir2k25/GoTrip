import React from 'react';

const TopDestinationCard = ({ country }) => {

    const { image, location, price } = country || {}

    return (
        <div className="flex flex-col items-center text-center p-4 rounded-sm hover:shadow duration-300 cursor-pointer">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <img
                    src={image}
                    alt={location}
                    className="w-40 h-40 object-cover"
                />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
                {location}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                From <span className="font-medium">US${price}</span> per day
            </p>
        </div>
    );
};

export default TopDestinationCard;
