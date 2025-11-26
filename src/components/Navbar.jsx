import { CiSearch } from "react-icons/ci";
import Logo from '../assets/logo.png';
import { useEffect, useState } from "react";


const Navbar = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {

        const scroll = () => {
            if (window.scrollY >= 50) {
                setScroll(true)
                // console.log("fffff");

            } else {
                setScroll(false)
                // console.log('hhhh');
            }
        }
        window.addEventListener('scroll', scroll)
    }, [])

    return (
        <nav className={` ${scroll ? 'bg-amber-100' : ''} fixed duration-300 top-0 w-full z-50 px-8 py-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left Logo */}
                <div className="cursor-pointer">
                    <img src={Logo} alt="" />
                </div>

                {/* Center Menu */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-primary">
                    <li className="cursor-pointer hover:text-blue-900">Home</li>
                    <li className="cursor-pointer hover:text-blue-900">Categories</li>
                    <li className="cursor-pointer hover:text-blue-900">Destination</li>
                    <li className="cursor-pointer hover:text-blue-900">Blog</li>
                    <li className="cursor-pointer hover:text-blue-900">Pages</li>
                    <li className="cursor-pointer hover:text-blue-900">Contact</li>
                </ul>

                {/* Right Buttons */}
                <div className="flex items-center gap-4">

                    {/* Search Icon */}
                    <CiSearch className="w-6.25 h-6.25 cursor-pointer text-primary" />

                    {/* Become Expert */}
                    <button className="bg-primary border border-primary text-white hover:text-primary px-5 py-2 rounded-sm text-sm font-medium hover:bg-transparent transition">
                        Become An Expert
                    </button>

                    {/* Sign In */}
                    <button className="border border-primary px-5 py-2 rounded-sm text-primary text-sm font-medium hover:bg-primary hover:text-white transition">
                        Sign In / Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
