import SilkSlider from '../components/SilkSlider';
import PickUpLocation from './PickUpLocation';


const Banner = () => {


    return (
        <section className='heroBg'>
            <div className='container'>
                <div className='text-center pt-49.5'>
                    <h1 className='text-[60px] font-semibold '>
                        Search for the Best Car Hire Deals
                    </h1>
                    <p className='pt-1.5 pb-6.25'>Book better cars from local hosts across the US and around the world.</p>
                </div>

                <PickUpLocation />

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
