import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import HeroImg from "../assets/heroCar.png";


export default function SilkSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="container ">
                <Slider {...settings}>

                    <div>
                        <img className="w-full rounded-2xl" src={HeroImg} alt="" />
                    </div>
                    <div>
                        <img className="w-full rounded-2xl" src={HeroImg} alt="" />
                    </div>
                    <div>
                        <img className="w-full rounded-2xl" src={HeroImg} alt="" />
                    </div>
                    <div>
                        <img className="w-full rounded-2xl" src={HeroImg} alt="" />
                    </div>

                </Slider>
            </div>
        </>
    );
}