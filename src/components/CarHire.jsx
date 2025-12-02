import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";


const CarHire = () => {
    return (
        <>
            <section>
                <div className='container flex justify-around py-30 items-center mx-auto'>

                    <div className='#'>
                        <h2 className='text-[30px] font-semibold w-[496px]'>GoTrip is a World Leading Car Hire Booking Platform</h2>
                        <p className='py-10 w-[520px] text-[#697488]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className='flex justify-center items-center bg-primary text-white py-3.5 px-8.75 rounded-sm gap-1.5 cursor-pointer'>Learn More <LuMoveUpRight />
                        </button>
                    </div>

                    <div className='w-[520px] h-[420px] grid grid-cols-2 shadow items-center text-center'>

                        <div className='border-r border-b border-[#3e3f401e] text-center '>
                            <h2 className='text-[40px] font-semibold'>4,958</h2>
                            <p className='text-[#697488]'>Destinations</p>
                        </div>
                        <div className='border-b border-[#3e3f401e]'>
                            <h2 className='text-[40px] font-semibold'>2,869</h2>
                            <p className='text-[#697488]'>Total Properties</p>
                        </div>
                        <div className='border-r border-[#3e3f401e]'>
                            <h2 className='text-[40px] font-semibold'>2M</h2>
                            <p className='text-[#697488]'>Happy customers</p>
                        </div>
                        <div>
                            <h2 className='text-[40px] font-semibold'>574,974</h2>
                            <p className='text-[#697488]'>Our Volunteers</p>
                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default CarHire;
