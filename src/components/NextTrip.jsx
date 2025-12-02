import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";
import tripImage1 from '../assets/nexTrip/1.png';
import tripImage2 from '../assets/nexTrip/2.png';


const NextTrip = () => {
    return (
        <>
            <section>
                <div className='container flex justify- items-center py-20 mx-auto px-10'>
                    <div>
                        <h2 className='text-[30px] font-semibold'>
                            Get inspiration for your next trip
                        </h2>
                        <p className='text-[#697488] '>Interdum et malesuada fames</p>
                    </div>
                    <button className='flex justify-center items-center bg-[#e6e8ec] text-primary font-bold py-3.5 px-8.75 rounded-sm gap-1.5 cursor-pointer'>More <LuMoveUpRight />
                    </button>
                </div>

                <div className='container flex justify-center items-center gap-7.5 mx-auto px-10'>
                    <div className='w-102.5'>
                        <img className='rounded-lg' src={tripImage1} alt="" />
                        <h2 className='text-lg font-medium pt-5 pb-1.25'>10 European ski destinations you should visit this winter</h2>
                        <span className='text-[#697488]'>April 06, 2022</span>
                    </div>
                    <div className='w-102.5'>
                        <img className='rounded-lg' src={tripImage2} alt="" />
                        <h2 className='text-lg font-medium pt-5 pb-1.25'>Booking travel during Corona: good advice in an uncertain time</h2>
                        <span className='text-[#697488]'>April 06, 2022</span>
                    </div>

                    <div className='grid grid-cols-1 gap-y-3.5'>
                        <div className='flex justify-center items-center gap-3.5 w-102.25'>
                            <img className='w-32.5 h-32.5 rounded-lg' src={tripImage1} alt="" />
                            <div>
                                <h2 className='text-lg font-medium'>The world’s most romantic destinations</h2>
                                <span className='text-[#697488]'>December 16, 2022</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3.5 w-102.25'>
                            <img className='w-32.5 h-32.5 rounded-lg' src={tripImage1} alt="" />
                            <div>
                                <h2 className='text-lg font-medium'>The world’s most romantic destinations</h2>
                                <span className='text-[#697488]'>December 16, 2022</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3.5 w-102.25'>
                            <img className='w-32.5 h-32.5 rounded-lg' src={tripImage1} alt="" />
                            <div>
                                <h2 className='text-lg font-medium'>The world’s most romantic destinations</h2>
                                <span className='text-[#697488]'>December 16, 2022</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default NextTrip;
