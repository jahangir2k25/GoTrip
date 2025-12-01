import CarData from "../data/CarData";
import CarCard from "./CarCard";

const CarListing = () => {
    return (
        <>
            <div className="popular-car text-center mt-30">
                <h2 className='text-[30px] font-semibold'>Popular Car Hire</h2>
                <p className='pt-1.5 pb-10'>Interdum et malesuada fames ac ante ipsum</p>
            </div>
            <CarCard />
        </>
    );
};

export default CarListing;