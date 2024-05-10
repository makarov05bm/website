// components/SwiperComponent.jsx
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { loop, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const SwiperComponent = ({ children }) => {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop
    }

    return (
        <Swiper pagination={{
            dynamicBullets: true,
        }}
            modules={[Pagination]}
            className="mySwiper">
            {children}
        </Swiper>
    );
};

export default SwiperComponent;
