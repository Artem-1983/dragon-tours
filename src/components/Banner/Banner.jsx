import React from 'react';
import TravelImg from '../../assets/travel_banner.png';
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";


const Banner = () => {
    return (
        <>
            <div className='min-h-[550px] bg-gray-100'>
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 " >
                    <div className="container">
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                            <div data-aos='flip-up'>
                                <img src={TravelImg} alt="travel image" className='max-w-[450px] h-[450px] w-full mx-auto object-contain' />
                            </div>

                            <div className='flex flex-col justify-center gap-6 sm:pt-0 lg:px-16'>
                                <h1 data-aos='fade-up' className=' className="text-3xl sm:text-4xl font-bold'>Travel to every corner of China with us!</h1>
                                <p data-aos='fade-up' className='className="text-sm text-gray-500 tracking-wide leading-8'>Discover new places, meet new friends, secure new business opportunties!</p>
                                <div data-aos="zoom-in" className='grid grid-cols-2 gap-6'>
                                    <div className='space-y-6'>
                                        <div className="flex items-center gap-4">
                                            <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                            <p>Flight</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                                            <p>Hotel</p>
                                        </div>
                                    </div>


                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                                            <p>Wi-fi</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                                            <p>Foods</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Banner