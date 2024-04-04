import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, FreeMode } from 'swiper/modules';


const ReviweSlider = ({review}) => {
const [stateNav, setStateNav] = useState(false)

const handleMouseEnter = () => {
setStateNav(true)
}
const handleMouseLeave = () => {
setStateNav(false)
}

    return (
        <>
            <Swiper
                cssMode={true}
                navigation= {stateNav}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, FreeMode]}
                className="mySwiper w-[80%] "
            >
                {
                    review.map((data) => (
                        <div key={data.id}>
                            <SwiperSlide className='flex flex-col pl-28 justify-center '
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                                <p>{data.message}</p>
                                <p><span className=' text-gray-900 font-semibold'>{data.name}</span> / {data.com}</p>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </>
    )
}

export default ReviweSlider
