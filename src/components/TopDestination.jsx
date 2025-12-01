import React from 'react';
import PopularDestinationsCard from './TopDestinationCard';
import countries from '../data/countries';

const TopDestination = () => {
    return (
        <>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className=" mb-10">
                        <div className="popular-car text-center mt-30">
                            <h2 className='text-[30px] font-semibold'>Top Destinations in UK</h2>
                            <p className='pt-1.5 pb-10'>These popular destinations have a lot to offer</p>
                            <div className="flex gap-7.5 justify-center ">
                                {countries.map(item => <PopularDestinationsCard country={item} key={item.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDestination;
