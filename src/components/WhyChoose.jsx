import React from 'react';
import Icon1 from '../assets/icons/certificate.png';
import Icon2 from '../assets/icons/service.png';
import Icon3 from '../assets/icons/calendar.png';
import TopDestination from './TopDestination';
import CarListing from './CarListing';



const WhyChoose = () => {
    
    const features = [
        {
            iconUrl: Icon1,
            title: "Best Price Guarantee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.",
        },
        {
            iconUrl: Icon2,
            title: "Easy & Quick Booking",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.",
        },

        {
            iconUrl: Icon3,
            title: "Customer Care 24/7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.",
        },
    ];

    return (
        <section className="pb-16 pt-140 bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
                    <p className="text-gray-500 mb-4">These popular destinations have a lot to offer</p>
                    <div className="mx-auto w-12 h-1 bg-pink-300 rounded"></div>
                </div>


                <div className="grid md:grid-cols-3 gap-8 w-[1180px] mx-auto">

                    {
                        features.map((feature) => (

                            <div
                                key={feature.title}
                                className="flex flex-col items-center text-center p-6"
                            >

                                <div className="mb-4">
                                    <img src={feature.iconUrl} alt={feature.title} className="h-20 w-20 mx-auto" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>

                                <p className="text-gray-500 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }

                </div>
                
                {/* popular car hire */}
                <CarListing />

                {/* Top Destinations in UK */}
                <TopDestination />

            </div>

        </section>
    );
};

export default WhyChoose;