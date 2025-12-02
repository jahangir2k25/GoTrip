import { CiSearch } from "react-icons/ci";
import Logo from '../assets/logo.png';
import { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router';
import { FaWindowClose } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';



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

    const [hiddenPages, setHiddenPages] = useState(true)
    const [isOpen, setisopen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // console.log(isOpen)

    return (
        <nav className={` ${scroll ? 'bg-amber-100' : ''} fixed duration-300 top-0 w-full z-50 px-8 py-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left Logo */}
                <div className="cursor-pointer">
                    <img src={Logo} alt="" />
                </div>

                {/* Center Menu */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-primary">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-gray-500 font-bold' : 'duration-300 hover:text-gray-100'}>
                        <li className="cursor-pointer hover:text-blue-900">Home</li>
                    </NavLink>

                    <NavLink to='/categories'>
                        <li className="cursor-pointer hover:text-blue-900">Categories</li>
                    </NavLink>

                    <NavLink to='/destination'>
                        <li className="cursor-pointer hover:text-blue-900">Destination</li>
                    </NavLink>

                    <NavLink to='/blog'>
                        <li className="cursor-pointer hover:text-blue-900">Blog</li>
                    </NavLink>

                    {/* <NavLink to='/pages'>
                        <li className="cursor-pointer hover:text-blue-900">Pages</li>
                    </NavLink> */}
                    <li>
                        <button onClick={() => setHiddenPages(!hiddenPages)} className={'relative hover:text-blue-900 duration-300 group'}>
                            <span className='duration-300 hover:text-blue-900 relative cursor-pointer'>Pages</span>
                            <div hidden={hiddenPages} className="absolute top-9 shadow-sm bg-[#29292834] rounded-sm p-3 text-slate-900">
                                <ul className='space-y-1'>
                                    <li><Link to='/about' className='text-amber-400 px-5 py-1 rounded-sm duration-300 hover:bg-blue-100 inline-block'>About</Link></li>
                                    <li><Link to='/login' className='text-amber-400 px-5 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Login</Link></li>
                                    <li><Link to='/register' className='text-amber-400 px-5 py-1 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Register</Link></li>
                                    <li><Link to='/terms' className='text-amber-400 px-5 rounded-sm duration-300 hover:bg-blue-100 inline-block'>Terms</Link></li>
                                </ul>
                            </div>
                        </button>
                    </li>

                    <NavLink to='/contact'>
                        <li className="cursor-pointer hover:text-blue-900">Contact</li>
                    </NavLink>
                </ul>

                {/* Right Buttons */}
                <div className="flex items-center gap-4">

                    {/* Search Icon */}
                    <CiSearch className="w-6.25 h-6.25 cursor-pointer text-primary" />

                    {/* Become Expert */}
                    <button className="bg-primary border border-primary text-white hover:text-primary px-5 py-2 rounded-sm text-sm font-medium hover:bg-transparent transition cursor-pointer">
                        Become An Expert
                    </button>

                    {/* Sign In */}
                    <button className="border border-primary px-5 py-2 rounded-sm text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
                        <Link to='/Login'>
                            Sign In / Register
                        </Link>
                    </button>
                </div>

                {/* mobile bar*/}
                <div className="lg:hidden ">
                    <button onClick={() => setisopen(!isOpen)} className='text-2xl text-gray-100 cursor-pointer'> {isOpen ? <FaWindowClose /> : <FaBarsStaggered />}</button>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden fixed bg-slate-900/90 backdrop-blur-2xl min-h-screen top-0 left-0 w-3/4 shadow-sm shadow-gray-500 flex justify-center items-center duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <ul className='text-center'>
                        {/* {navMenu} */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
