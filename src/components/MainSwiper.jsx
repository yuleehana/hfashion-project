import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSwiper = () => {
    // 메인이미지 저장 배열
    const slides = [
        { src: "./images/main-banner1.jpg", alt: "slider1" },
        { src: "./images/main-banner2.jpg", alt: "slider2" },
        { src: "./images/main-banner3.jpg", alt: "slider3" },
        { src: "./images/main-banner4.jpg", alt: "slider4" },
        { src: "./images/main-banner5.jpg", alt: "slider5" },
        { src: "./images/main-banner6.jpg", alt: "slider6" },
        { src: "./images/main-banner7.jpg", alt: "slider7" },
        { src: "./images/main-banner8.jpg", alt: "slider8" },
        { src: "./images/main-banner9.jpg", alt: "slider9" },
    ]


    return (
        <div className="main-sliders">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination
                navigation
                loop={true}>
                {slides.map((slide, id) => (
                    <SwiperSlide key={id}>
                        <img src={slide.src} alt={slide.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MainSwiper