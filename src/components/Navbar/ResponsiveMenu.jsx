import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";


const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div
            className={`${showMenu ? "left-0" : "-left-[100%]"
                } fixed top-0 bottom-0 z-30 flex h-screen w-[75%] flex-col 
            bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 
            dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 
            md:hidden rounded-r-2xl shadow-2xl border-r border-gray-200 dark:border-gray-700`}
        >
            {/* Navigation Links at the top */}
            <nav className="mb-10">
                <ul className="space-y-4 text-xl">
                    {NavbarLinks.map((data, index) => (
                        <li key={index}>
                            <Link
                                to={data.link}
                                className="block rounded-lg px-4 py-2 font-medium 
                                text-gray-700 dark:text-gray-200 
                                hover:bg-blue-100 dark:hover:bg-gray-700 
                                hover:text-black dark:hover:text-white 
                                transition-colors duration-200 shadow-sm"
                                onClick={() => {
                                    setShowMenu(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {data.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* User Info at the bottom */}
            <div className="mt-auto border-t pt-6 dark:border-gray-700">
                <div className="flex items-center gap-4">
                    <FaUserCircle size={50} className="text-gray-600 dark:text-white" />
                    <div>
                        <h1 className="text-lg font-semibold">Hello, User</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Premium User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
