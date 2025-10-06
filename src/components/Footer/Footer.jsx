import React from 'react';
import FooterLogo from '../../assets/logo.jpg';
import Video from '../../assets/video/main.mp4';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Best Places",
        link: "/best-places",
    },
    {
        id: 4,
        title: "Blogs",
        link: "/blogs",
    },
];



const Footer = () => {
    return (
        <>
            <div className='py-10 relative overflow-hidden'>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
                >
                    <source src={Video} type="video/mp4" />
                </video>

                <div className="container">
                    <div className="grid md:grid-cols-3 py-5 bg-white backdrop-blur-sm rounded-t-xl">
                        <div className="py-8 px-4">
                            <h1 className="flex items-center gap-3 mb-4 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                                <img src={FooterLogo} alt="" className="max-h-[60px]" />
                            </h1>
                            <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                                eum tenetur.
                            </p>
                            <div className="flex items-center gap-3 ">
                                <FaLocationArrow />
                                <p>rabogoshvili_art@inbox.ru</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+7 927 322 90 37</p>
                            </div>
                            {/* social handles */}
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"><Link
                                            to={link.link}
                                            onClick={() => window.scrollTo(0, 0)}>
                                            <span>{link.title}</span>
                                        </Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"><Link
                                            to={link.link}
                                            onClick={() => window.scrollTo(0, 0)}>
                                            <span>{link.title}</span>
                                        </Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200" ><Link
                                            to={link.link}
                                            onClick={() => window.scrollTo(0, 0)}>
                                            <span>{link.title}</span>
                                        </Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer