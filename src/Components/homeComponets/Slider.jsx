import React, { useRef, useState } from 'react';
import img1 from "../assets/SliderImage/KAM4UK-Kamagra-Oral-Jelly-400x400.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Slider = ({ product }) => {
    const navigate = useNavigate();
    return (
        <>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                freeMode={true}
                // modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper h-full w-full pl-2 pr-10 pt-3 pb-14 mb-5"
            >
                {
                    product.map((data) => (
                        <div key={data.id} >
                            <SwiperSlide className=' flex justify-center border hover:shadow-md hover:shadow-gray-600 hover:scale-105 hover:duration-200 rounded-sm p-4 relative group' onClick={() => navigate(`/product/${data.name}`)}>
                                 <div>
                                    <img src={img1} alt="product" />
                                    {/* <img src={data.image} alt="product" /> */}
                                    <p className=' text-xs text-center'>
                                        {data.name}
                                    </p>
                                    <p className=' text-center text-blue-500'>{data.des} </p>
                                    <div className=' flex justify-center gap-1'>
                                        <p>{data.cutprice} </p> {" - "}
                                        <p> {data.price}</p>
                                    </div>
                                 </div>
                                 <div className=' absolute bg-gray-100 text-blue-600 border border-blue-600 group-hover:-left-1 group-hover:bg-blue-600 group-hover:text-gray-100 group-hover:duration-200 left-0 top-14 p-2 rounded'>-{data.discount} </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Slider
