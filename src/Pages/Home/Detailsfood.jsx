import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex, Spin } from 'antd';

const Detailsfood = () => {
    const [isLoading, setIsLoading] = useState(true);
    const detailfood = useLoaderData();

    useEffect(() => {
        // Simulate data loading with a delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    return (
        <div className="mb-6 min-w-screen min-h-screen bg-[#9dbd8a]  flex items-center p-5 lg:p-10 overflow-hidden relative">
             {isLoading ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Flex align="center" justify="center">
                        <Spin size="large" />
                    </Flex>
                </div>
            ) :  (
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img
                                    src={detailfood.foodImage}
                                    className="w-full relative z-10"
                                    alt=""
                                />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">
                                    {detailfood.foodName}
                                </h1>
                                <p className="text-xl">Location: {detailfood.pickupLocation}</p>
                                <p className="text-xl">Total: {detailfood.foodQuantity}</p>
                                <p className="text-xl">Expire on {detailfood.expiredDateTime}</p>
                                <p className="text-xl">{detailfood.additionalNotes}</p>
                                <p className="text-xl">From: {detailfood.donatorName}</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-[#446c2c] opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                        <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detailsfood;
