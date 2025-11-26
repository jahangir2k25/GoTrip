import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SilkSlider from '../components/SilkSlider';


const Banner = () => {

    const [pickupLocation, setPickupLocation] = useState('City or Airport');
    const [dropoffLocation, setDropoffLocation] = useState('City or Airport');
    const [passengers, setPassengers] = useState(4);

    const handleSearch = () => {
        // console.log('Searching...');
    };

    return (
        <section className='heroBg'>
            <div className='container'>
                <div className='text-center pt-49.5'>
                    <h1 className='text-[60px] font-semibold '>
                        Search for the Best Car Hire Deals
                    </h1>
                    <p className='pt-1.5 pb-6.25'>Book better cars from local hosts across the US and around the world.</p>
                </div>

                <div className="p-4 bg-white shadow-lg rounded-sm max-w-5xl mx-auto relative z-20 top-7">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 ">

                        {/* Pick up location */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-700">Pick up location</label>
                            <input
                                type="text"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Drop off location */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-700">Drop off location</label>
                            <input
                                type="text"
                                value={dropoffLocation}
                                onChange={(e) => setDropoffLocation(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Pick up Date/Time */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-700">Pick up</label>
                            <input
                                type="text"
                                value="7 Mar · 10:00"
                                readOnly
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                            />
                        </div>

                        {/* Drop off Date/Time */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-700">Drop off</label>
                            <input
                                type="text"
                                value="7 Mar · 10:00"
                                readOnly
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                            />
                        </div>

                        {/* Passengers */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-700">Passenger (optional)</label>
                            <input
                                type="number"
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Search Button */}
                        <div className="w-full md:w-auto mt-4 md:mt-0 self-end">
                            <button
                                onClick={handleSearch}
                                className="w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-md shadow hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center cursor-pointer"
                            >
                                <CiSearch className="h-5 w-5 mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className='relative h-100'>
                    <div className='absolute w-full -top-5 left-0'>
                        <SilkSlider />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner;
