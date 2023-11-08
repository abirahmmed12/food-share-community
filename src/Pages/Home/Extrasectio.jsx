import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";

const ExtrasSection = () => {
    return (
        <div>
            <section className="bg-green-200 py-12">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
                        <p className="text-gray-600 text-lg mt-4">Discover what sets us apart from the rest.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* First Feature */}
                        <div className="p-8 border rounded shadow-lg text-center">
                            <h3 className="text-2xl font-semibold text-white mb-4">Meaningful Impact</h3>
                            <p className="text-gray-600">
                                We use the finest, locally sourced ingredients to ensure that every
                                dish is bursting with flavor and freshness.
                            </p>
                        </div>

                        {/* Second Feature */}
                        <div className="p-8 border rounded shadow-lg text-center">
                            <h3 className="text-2xl font-semibold text-white mb-4">Exceptional Service</h3>
                            <p className="text-gray-600">
                                Our dedicated team is here to make your dining experience memorable.
                                We're committed to providing excellent service from start to finish.
                            </p>
                        </div>

                        {/* Third Feature */}
                        <div className="p-8 border rounded shadow-lgtext-center">
                            <h3 className="text-2xl font-semibold text-white mb-4">Social Responsibility</h3>
                            <p className="text-gray-600">
                                Order online and have your favorite dishes delivered to your doorstep.
                                We're all about making your life easier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800">Explore Our Selection</h2>
                        <p className="text-gray-600 text-lg mt-4">Discover the brands and products we offer.</p>
                    </div>
                    <div className=''>
            <h1 className='text-5xl font-bold text-center'>Meet Our Team</h1>
            <div className='grid md:grid-cols-4 gap-10 my-16 bg-slate-100'>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                <figure><img className='w-full h-[350px]' src='https://i.ibb.co/0JktYxn/Watson-Love.jpg' alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">George R.R. Martin</h2>
                        <p className='py-3'>Maneging Director</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className="w-72 bg-base-100 shadow-xl text-center  ">
                <figure><img className='w-full h-[350px]' src='https://i.ibb.co/BVtnjML/download-3.jpg' alt="Shoes" /></figure>>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">J.K. Rowling</h2>
                        <p className='py-3'>Maneging Director</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                <figure><img className='w-full h-[350px]' src='https://i.ibb.co/7z0sC5t/Homepage-Create-Cultivate.jpg' alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">J.R.R. Tolkien</h2>
                        <p className='py-3'>Maneging Director</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
                <div className=" w-72 bg-base-100 shadow-xl text-center  ">
                    <figure><img className='w-full h-[350px]' src='https://i.ibb.co/TTJcSKq/Public-Speaking-Skills-Public-Speaking-Anxiety-Conquer-Your-Fear-of-Public-Speaking-Public-Speaking.jpg' alt="Shoes" /></figure>
                    <div className="my-6">
                        <h2 className="font-bold text-2xl">Alex Michaelides</h2>
                        <p className='py-3'>Maneging Director</p>
                        <h3 className='flex gap-3 justify-center'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
                   
                </div>
            </section>
        </div>
    );
};

export default ExtrasSection;
