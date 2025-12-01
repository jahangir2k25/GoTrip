import CarData from "../data/CarData";
import { CiHeart } from "react-icons/ci";


const CarCard = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center">

            {CarData.map((car) => (
                <div key={car.id} className="rounded-sm p-4 hover:shadow-lg transition">

                    {/* Image */}
                    <div className="relative">
                        <img
                            src={car.img}
                            alt={car.title}
                            className="w-65 h-37.5 p-2 border border-[#34333317] rounded-sm object-cover"
                        />
                        <button className="absolute top-3 right-5 bg-white p-2 rounded-full shadow">
                            <CiHeart className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Top text */}
                    <p className="text-sm text-gray-500 mt-3">
                        {car.location} • {car.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-semibold">{car.title}</h3>

                    {/* Features */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                        <span className="flex items-center gap-1">👤 {car.seats}</span>
                        <span className="flex items-center gap-1">🧳 {car.bags}</span>
                        <span className="flex items-center gap-1">⚙️ {car.type}</span>
                        <span className="text-sm text-gray-600 mt-1">🚘 {car.mileage}</span>
                    </div>


                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-2">
                        <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded">
                            {car.rating}
                        </span>
                        <span className="text-sm text-gray-600">
                            Exceptional · {car.reviews} reviews
                        </span>
                    </div>

                    <div className="text-xl font-bold mt-3">
                        ${car.price} <span className="text-sm font-normal">total</span>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default CarCard;