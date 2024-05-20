import React, { useState } from 'react'
import Slider from "../Components/homeComponets/Slider"
import ReviweSlider from "../Components/homeComponets/ReviweSlider"
import kam4uk from "../Components/assets/KAM4UK.jpg"
import Image1 from "../Components/assets/SliderImage/KAM4UK-Kamagra-Oral-Jelly-400x400.jpg"
import member from "../Components/assets/Members/Dr.-Stephan-R.-Bloesch.jpg"
import trustpilot from "../Components/assets/KAM4UK-trustpilot.jpg"
import Sexual from "../Components/assets/Medication information/Sexual-Wellness.jpg"
import Erectile from "../Components/assets/Medication information/Erectile-Dysfunction.jpg"
import Premature from "../Components/assets/Medication information/Premature-Ejaculation.jpg"
import Using from "../Components/assets/Medication information/Using-Medication.jpg"
import ED1 from "../Components/assets/OurBlog/ED-1.jpg"
import Cart from './Cart'

const product = [
    {
        _id: 1,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: 2,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: 3,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "33%"
    },
    {
        _id: 4,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: 5,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "43%"
    },
    {
        _id: 6,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "41%"
    },
    {
        _id: 7,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: 8,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: 9,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: 10,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },

];

const members = [
    {
        id: 1,
        image: "",
        name: "Dr. Stephan R. Bloesch",
        role: "Health Advisor & Consulting",
    },
    {
        id: 2,
        image: "",
        name: "Dr. Stephan R. Bloesch",
        role: "Health Advisor & Consulting",
    },
    {
        id: 3,
        image: "",
        name: "Dr. Stephan R. Bloesch",
        role: "Health Advisor & Consulting",
    },
    {
        id: 4,
        image: "",
        name: "Dr. Stephan R. Bloesch",
        role: "Health Advisor & Consulting",
    },
    {
        id: 5,
        image: "",
        name: "Dr. Stephan R. Bloesch",
        role: "Health Advisor & Consulting",
    },
];

const review = [
    {
        id: 1,
        message: "Amazing product, lowest prices and fantastic customer service. Highly recommend 😊",
        name: 'Christian Frazer',
        com: "JPMorgan"
    },
    {
        id: 2,
        message: "Amazing product, lowest prices and fantastic customer service. Highly recommend 😊",
        name: 'Christian Frazer',
        com: "JPMorgan"
    },
    {
        id: 3,
        message: "Amazing product, lowest prices and fantastic customer service. Highly recommend 😊",
        name: 'Christian Frazer',
        com: "JPMorgan"
    },
    {
        id: 4,
        message: "Amazing product, lowest prices and fantastic customer service. Highly recommend 😊",
        name: 'Christian Frazer',
        com: "JPMorgan"
    },
];

const mediInfo = [
    {
        id: 1,
        image: "",
        name: "Sexual Wellness",
        des: "Enhancing comprehension and awareness in sexual health wellness."
    },
    {
        id: 2,
        image: "",
        name: "Erectile Dysfunction",
        des: "Information on conditions, treatments, and prevention strategies for ED."
    },
    {
        id: 3,
        image: "",
        name: "Premature Ejaculation",
        des: "Insights on health issues, treatments, and prevention methods for PE."
    },
    {
        id: 4,
        image: "",
        name: "Using Medication",
        des: "Overview of globally recommended medications by doctors for treating ED and PE."
    },

];

const OurBlog = [
    {
        id: 1,
        image: "",
        title: "Sexual Dysfunction: Unveiling Causes and Effective Treatments",
        des: "In the realm of personal health and happiness, sexual well-being plays an indispensable role, deeply intertwined with our overall quality [...]"
    },
    {
        id: 2,
        image: "",
        title: "Premature Ejaculation: Embracing Natural Solutions",
        des: "In the midst of our hectic lives, where stress and tension seem ever-present, the importance of sexual health among men gfdfds asggsdgdf [...]"
    },
    {
        id: 3,
        image: "",
        title: "Causes of Premature Ejaculation and How to Address Them",
        des: "Premature ejaculation (PE) is a common sexual health issue affecting a significant number of men worldwide. It can strain relationships, [...]"
    },
];


const Home = () => {

    return (
        <>
            <div className=' mb-8'>

                {/* section 1 */}
                <section className=' pt-20'>
                    <div className=' flex w-9/12 mx-auto gap-5'>
                        <div className='flex flex-col w-[55%] gap-4 '>
                            <h2 className=' text-2xl font-semibold mt-3'>What Is Kamagra?</h2>
                            <p>Kamagra is acclaimed globally as a premier pharmaceutical solution for treating sexual dysfunction, specifically aimed at conditions such as Erectile Dysfunction (ED) and Premature Ejaculation (PE). This medication enhances blood flow to the male genital region, enabling the user to achieve and sustain a firm, enduring erection, vital for engaging in sexual activity. Featuring Sildenafil as its key active ingredient, Kamagra Oral Jelly emerges as the superior choice for those desiring a significant enhancement in their sexual performance.</p>
                            <p>
                                Sexual dysfunction has profound effects that are often ignored. It’s not just about sexual health; it can lead to complicated emotional problems and weaken relationships. Kamagra offers a discreet way to treat this, making it a good option for those who are uncomfortable talking about their erectile dysfunction issues.
                            </p>
                            {/* <span className=' border-2 w-32 p-1 flex justify-center hover:bg-blue-600 text-blue-600 border-blue-600 hover:text-gray-100'>
                        EXPLORE MORE
                    </span> */}
                            <span class="button p-1 flex justify-center border-blue-600 rounded-md group  w-32 border-2" id="button-3">
                                <span id="circle" ></span>
                                <p className=' group-hover:text-gray-100 z-30 duration-100 '>EXPLORE MORE</p>
                            </span>
                        </div>
                        <div className=' mt-6 '>
                            <img src={kam4uk} width={450} alt="kam4uk" />
                        </div>
                    </div>
                </section>


                {/* section 2*/}
                <section className=' '>
                    <div className='w-9/12 mx-auto'>
                        <h2 className=' text-gray-900 font-semibold text-3xl'>Buy Kamagra UK Online</h2>

                        {/* Slider */}
                        <Slider product={product} />
                    </div>
                </section>

                {/* section 3 About */}
                <section className=' w-9/12 mx-auto flex flex-col gap-5'>
                    <div className='  flex flex-col gap-5'>
                        <h2 className=' text-3xl text-gray-900 font-semibold'>About us</h2>
                        <p>At KAM4UK – Kamagra Oral Jelly UK, we are dedicated to improving men’s sexual healthcare. We commit to offering effective, scientifically-backed online solutions. Our team includes renowned endocrinologists, clinical psychologists, and skilled urologists, leveraging their expertise to enhance our services. Our vision is to be recognized as the definitive resource for insights into sexual health and medications across the United Kingdom. We aim to provide an inclusive, empathetic, and respectful healthcare experience.</p>
                        <p>We invite you to support our mission and contribute to advancing men’s sexual health. Explore the carefully selected and certified products featured on our site. For more information and to start your journey towards better health with us, please take a moment to read further [HERE].</p>
                    </div>

                    {/* members */}
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' text-3xl text-gray-900 font-semibold'>Our members</h2>
                        <div className=' flex justify-center gap-6'>
                            {
                                members.map((data) => (
                                    <div className=' flex flex-col items-center '>
                                        <img src={member} width={100} alt={data.name} />
                                        <p className=' text-lg text-gray-900 font-semibold'>{data.name} </p>
                                        <p className=' italic'>{data.role} </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* section 4 Review */}
                <section>
                    <div className='flex flex-col w-9/12 mx-auto gap-5'>
                        <h2>What our customers say</h2>
                        <div className=' flex'>
                            <ReviweSlider review={review} />
                            <img src={trustpilot} alt="trustpilot" width={200} />
                        </div>
                    </div>
                </section>

                {/* section 5 Medication information */}
                <section className=' w-9/12 mx-auto my-8'>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' text-gray-900 text-3xl font-semibold'>Medication information</h2>
                        <div className=' flex gap-7'>
                            {
                                mediInfo.map((data) => (
                                    <div className=' border rounded-sm shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500 hover:duration-200'>
                                        <img src={Sexual} alt={data.name} />
                                        <div className=' flex flex-col items-center p-4 pb-6'>
                                            <p className=' text-gray-900 font-semibold text-lg'>{data.name} </p>
                                            <p className=' text-center text-sm'>{data.des} </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* section 6 OUR BLOG */}
                <section className=' w-9/12 mx-auto my-8'>
                    <div className=' flex flex-col gap-5'>
                        <h2 className=' text-gray-900 text-3xl font-semibold'>OUR BLOG</h2>
                        <div className=' flex gap-6 '>
                            {
                                OurBlog.map((data) => (
                                    <div className=' border rounded-sm shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500 hover:duration-200 relative group'>
                                        <img src={ED1} height={150} alt={data.title} />
                                        <div className=' p-4 pb-6'>
                                            <p className=' text-gray-900 text-center font-semibold text-lg'>{data.title} </p>
                                            <p className=' text-center text-sm'>{data.des} </p>
                                        </div>
                                        <div className=' absolute bg-gray-100 text-blue-600 border border-blue-600 -left-1 group-hover:bg-blue-600 group-hover:text-gray-100 group-hover:duration-200 top-14 p-1 rounded w-10 leading-4 flex flex-col items-center'>04 <span className=' text-xs'>Mar</span> </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </section>

                {/* section 7 Disclaimer */}
                <section className=' w-9/12 mx-auto'>
                    <div className=' flex flex-col items-center gap-5'>
                        <h2 className=' text-gray-900 text-3xl font-semibold text-center'>Disclaimer</h2>
                        <p className=' text-center'>We reserve all rights and issue this disclaimer to clarify that any trademarks referenced herein are the property of their respective owners. The information provided on <span className='text-gray-900 text-lg font-semibold'>KAM4UK – Kamagra Oral Jelly UK</span>, encompassing brands, trademarks, guides, news, reviews, written content, images, illustrations, and any similar material, is safeguarded under intellectual property legislation.</p>
                        <button className=' border-2 border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-gray-100 hover:duration-200'>MORE DETAILS</button>
                    </div>
                </section>

                <Cart className=" z-40" />
            </div>
        </>
    )
}

export default Home
