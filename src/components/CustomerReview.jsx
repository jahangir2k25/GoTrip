import React, { useEffect, useState } from 'react';
import ReviewImage from '../assets/review.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import amazon from '../assets/amazon.png';
import dropcam from '../assets/dropcam.png';
import logitech from '../assets/logitech.png';
import spotify from '../assets/Spotify.png';
import stars from '../assets/stars.png';


const sampleReviews = [
    { id: 1, img: ReviewImage, alt: 'Review 1' },
    { id: 2, img: ReviewImage, alt: 'Review 2' },
    { id: 3, img: ReviewImage, alt: 'Review 3' },
    { id: 4, img: ReviewImage, alt: 'Review 4' },
]

const CustomerReview = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <section className='bg-primary py-30'>
            <div className="container">
                <div className='text-center text-white space-y-4'>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Customer Reviews</h2>
                    <p>Interdum et malesuada fames ac ante ipsum</p>
                </div>

                <div className='mt-8'>
                    {isClient ? (
                        <Slider {...settings}>
                            {sampleReviews.map((r) => (
                                <div key={r.id} className='px-3'>
                                    <img src={r.img} alt={r.alt} className='mx-auto' />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {sampleReviews.map((r) => (
                                <div key={r.id} className='p-4'>
                                    <img src={r.img} alt={r.alt} className='mx-auto' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='flex justify-around items-center text-white mt-10'>
                    <div>
                        <h2 className='text-[30px] font-semibold'>13m+</h2>
                        <p>Happy People</p>
                    </div>
                    <div>
                        <h2 className='text-[30px] font-semibold'>4.88</h2>
                        <p>Overall Rating</p>
                        <img className='mt-2' src={stars} alt="" />
                    </div>

                    <img className='opacity-50' src={amazon} alt="" />
                    <img className='opacity-50' src={dropcam} alt="" />
                    <img className='opacity-50' src={logitech} alt="" />
                    <img className='opacity-50' src={spotify} alt="" />

                </div>

            </div>
        </section>
    )
}

export default CustomerReview;
