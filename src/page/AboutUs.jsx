import React from 'react';

const AboutUs = () => {
    return (
        <div className=' pt-16 bg-gray-50'>
            <div className="p-6 w-9/12 mx-auto font-sans text-lg">
                <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl">Welcome to Blue Pills</p>
                    </div>
                </div>
                <section className="mb-12">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2> */}
                            <p className="text-gray-700">
                            At Blue Pills, we are committed to enhancing your health and well-being by providing high-quality medicines and health products. Our mission is to offer effective solutions for sexual health and beyond, ensuring you have access to the best care available.
                            </p>
                        </div>
                    </section>

                {/* Content Sections */}
                <div className="container mx-auto p-6">
                    {/* Our Story */}
                    <section className="mb-12">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-700">
                                Founded to make a positive impact, Blue Pills began with a focus on addressing common health issues. We provide discreet, convenient, and effective solutions to enhance your quality of life.
                            </p>
                        </div>
                    </section>

                    {/* What We Offer */}
                    <section className="mb-12">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li className="mb-2"><span className=' font-semibold'>Sexual Health Products:</span> Including treatments for erectile dysfunction and other wellness products.</li>
                                <li className="mb-2"><span className=' font-semibold'>General Health Products:</span> Vitamins, pain relief, and treatments for common conditions.</li>
                                <li className="mb-2"><span className=' font-semibold'>Quality Assurance:</span> Products sourced from reputable manufacturers and subject to strict quality control.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Our Commitment */}
                    <section className="mb-12">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li className="mb-2"><span className=' font-semibold'>Customer Satisfaction:</span> Excellent customer service and support.</li>
                                <li className="mb-2"><span className=' font-semibold'>Discreet Service:</span> Privacy-protected packaging.</li>
                                <li className="mb-2"><span className=' font-semibold'>Reliable Information:</span> Detailed product information for informed decisions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="mb-12">
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li className="mb-2"><span className=' font-semibold'>Expertise:</span> Knowledgeable and dedicated team.</li>
                                <li className="mb-2"><span className=' font-semibold'>Convenience:</span> Easy-to-use website with quick, discreet delivery.</li>
                                <li className="mb-2"><span className=' font-semibold'>Trustworthy:</span> High standards of quality and integrity.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Get in Touch */}
                    <section>
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                            <p className="text-gray-700 mb-4">
                                We are here to help you achieve your health goals. Contact us for any questions or assistance.
                            </p>
                            <p className="text-gray-700">
                                Thank you for choosing Blue Pills. We look forward to supporting your journey to better health.
                            </p>
                        </div>
                    </section>
                    </div>
                </div>
            </div>

            );
}

            export default AboutUs;
