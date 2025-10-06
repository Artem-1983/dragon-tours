import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
    return (
        <>
            {orderPopup && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md w-[300px] duration-200 dark:bg-gray-900 p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-semibold text-black/70">Book Your Trip</h1>
                            </div>
                            <div>
                                <IoCloseOutline
                                    className="text-2xl cursor-pointer" onClick={() => { setOrderPopup(false) }} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <input placeholder="name" type="text" className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4" />
                            <input placeholder="email" type="text" className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4" />
                            <input placeholder="address" type="text" className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4" />
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">Book Now</button></div>




                        </div>



                    </div>
                </div>

            )}
        </>
    );
};

export default OrderPopup;