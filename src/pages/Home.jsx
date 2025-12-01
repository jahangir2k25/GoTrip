import React from 'react'
import Banner from '../components/Banner';
import WhyChoose from '../components/WhyChoose';
import DownloadApp from '../components/DownloadApp';
import Faq from '../components/Faq';
import CustomerReview from '../components/CustomerReview';
import CarHire from '../components/CarHire';

const Home = () => {
    return (
        <>
            <Banner />
            <WhyChoose />
            <CustomerReview />
            <CarHire />
            <DownloadApp />
            <Faq />
        </>
    )
}

export default Home;
