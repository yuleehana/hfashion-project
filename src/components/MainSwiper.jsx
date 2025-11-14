import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sass/MainSwiper.scss'

const MainSwiper = () => {
    // 메인이미지 저장 배열
    const slides = [
        {
            src: "./images/main-banner1.jpg", alt: "slider1",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner2.jpg", alt: "slider2",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner3.jpg", alt: "slider3",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner4.jpg", alt: "slider4",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner5.jpg", alt: "slider5",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner6.jpg", alt: "slider6",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner7.jpg", alt: "slider7",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner8.jpg", alt: "slider8",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
        {
            src: "./images/main-banner9.jpg", alt: "slider9",
            desc: ['TOMMY HILFIGER', '힐피거 레이싱 클럽', '스타들과 함께한 가을 컬렉션 런칭 행사']
        },
    ]


    return (
        <div className="main-sliders">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000 }}
                navigation
                pagination
                loop={true}
                centeredSlides={true}
                slidesPerView={1.8}
                spaceBetween={20}

                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-pagination-bottom': '40px',
                    '--swiper-pagination-bullet-size': '12px'
                }}
            >
                {slides.map((slide, id) => (
                    <SwiperSlide key={id}>
                        <div className="img-box">
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                        <div className="text-box">
                            <p>{slide.desc[0]}</p>
                            <p>{slide.desc[1]}</p>
                            <p>{slide.desc[2]}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MainSwiper