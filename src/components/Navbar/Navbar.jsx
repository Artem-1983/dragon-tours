import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImg from '../../assets/logo.jpg';
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";


export const NavbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Blogs",
        link: "/blogs",
    },
    {
        name: "Best Places",
        link: "/places",
    },
];

const DropdownLinks = [
    {
        name: "Our Services",
        link: "#/services",
    },

    {
        name: "Mobile Brands",
        link: "#/mobile_brands",
    },

    {
        name: "Location",
        link: "#/location",
    },
]


const Navbar = ({ handleOrderPopup }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className='fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md'>
                <div className='bg-gradient-to-r from-primary to-secondary text-white'>

                    <div className="container py-[2px] sm:block hidden">
                        <div className="flex justify-between">
                            <p>20% off on the next booking</p>
                            <p>Mobile No: +7-927-322-90-37</p>
                        </div>
                    </div>
                </div>


                <div className="container py-3 sm:py-0">
                    <div className='flex justify-between items-center'>
                        {/*logo section*/}
                        <div><Link to='/' onClick={() => window.scrollTo(0, 0)}> <img src={LogoImg} alt="" className='h-12' /></Link></div>

                        {/*Desktop navigation section*/}
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-6'>
                                <li className='py-4'><NavLink activeClassname="active" to='/' onClick={() => window.scrollTo(0, 0)}>Home</NavLink></li>
                                <li className='py-4'><NavLink activeClassname="active" to='/blogs' onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink></li>
                                <li className='py-4'><NavLink activeClassname="active" to='/places' onClick={() => window.scrollTo(0, 0)}>Best Places</NavLink></li>
                                <li className='py-4'><NavLink activeClassname="active" to='/about' onClick={() => window.scrollTo(0, 0)}>About</NavLink></li>
                                {/*Drop-down section*/}
                                <li className='relative group cursor-pointer'>
                                    <div className='dropdown group flex items-center'>
                                        <span>Quick Links</span>
                                        <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180' /></span>
                                    </div>

                                    <div className='absolute -left-9 z-[9999] w-[150px] hidden rounded-md bg-white p-2 group-hover:block shadow-md'>
                                        <ul className='space-y-3'>{DropdownLinks.map((data) => {
                                            return (<li key={data.name}><a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>{data.name}</a></li>)
                                        })}</ul>
                                    </div>

                                </li>

                            </ul>
                        </div>

                        {/*Book now section*/}
                        <div className='flex item-center gap-4'>
                            <button onClick={() => {
                                handleOrderPopup();
                            }} className='bg-gradient-to-r from-primary to-secondary rounded-full hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1'>Book Now</button>

                            {/* Mobile Hamburger icon */}

                            <div className='block md:hidden'>
                                {showMenu ? (<HiMenuAlt1 className='cursor-pointer transition-all' onClick={toggleMenu} size={30} />) :
                                    (<HiMenuAlt3 clasName='cursor-pointer transition-all' onClick={toggleMenu} size={30} />)}
                            </div>


                        </div>
                    </div>
                </div>
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            </nav >
        </>
    )
}

export default Navbar