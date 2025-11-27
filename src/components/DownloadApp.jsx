import React from 'react';
import Apple from '../assets/apple.png';
import Google from '../assets/google.png';
import DownloadAppImg from '../assets/DownloadApp.png';

const DownloadApp = () => {
    return (
        <>
            <section className="my-30">
                <div className="container bg-amber-300 flex justify-around items-center py-20.25">
                    <div>
                        <h2 className='text-[30px] font-semibold'>Download the App</h2>
                        <p className='w-113 pt-4.25 pb-6.5'>Book in advance or last-minute with GoTrip. Receive instant confirmation. Access your booking info offline.</p>
                        <div className='flex gap-5'>
                            <img src={Apple} alt="" />
                            <img src={Google} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={DownloadAppImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadApp;
