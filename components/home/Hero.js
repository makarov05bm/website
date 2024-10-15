import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoGameController } from "react-icons/io5";
import { RiGameLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-scroll';
import { IoChevronForward } from "react-icons/io5";

SwiperCore.use([EffectCoverflow]);

const Hero = () => {
  const titles = [
    'Unleashing \n Artistic Passion',
    'Where Art and Retro meet Playfully'
  ]

  const [curr, setCurr] = useState(1)
  const [backgroundImage, setBackgroundImage] = useState('/images/new-hero.png'); // Default background image
  const [text, setText] = useState(titles[0])

  const backgrounds = ['/images/new-hero.png', '/images/hero.png'];

  // Function to change background image
  const changeBackground = () => {
    const currentIndex = backgrounds.indexOf(backgroundImage);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setBackgroundImage(backgrounds[nextIndex]);
    setText(titles[(titles.indexOf(text) + 1) % titles.length])
  };

  return (
    <section className='hero-con' id='home' style={{
      backgroundImage: `url(${backgroundImage})`,
      transition: 'background-image 1s ease-in-out',
    }}>
      <div className="left-fade"></div>
      <div className="right-fade"></div>


      {/* <div className="dots">
        <div className={`dot ${curr == 0 ? 'active' : ''}`}></div>
        <div className={`dot ${curr == 1 ? 'active' : ''}`}></div>
        <div className={`dot ${curr == 2 ? 'active' : ''}`}></div>
      </div> */}

      {/* onClick={() => {
        if (curr < 2) {
          setCurr(curr + 1)
        } else {
          setCurr(0)
        }
      }} */}

      <div className="content">
        <div className="main-con">
          <h3>HI, WE ARE RETROMUSE</h3>
          <h1 style={text === "Where Art and Retro meet Playfully" ? { fontSize: '3.1rem' } : { fontSize: '3.8rem' }}>{text}</h1>
          <p>Continuously bringing digital creations to life that exceed expectations. <br></br> With each piece telling a story.</p>
          {/* <h1>Where <span className="yel">Art</span> and <span className="blue">Retro</span> meet <br></br> <span className="pink">Playfully</span></h1> */}
          <Link href='/services' className='link'>Explore Our Services</Link>

          <img src="/images/header.png" alt="" />
          <button className='arrow' onClick={changeBackground}>
            <IoChevronForward className='icon' />
          </button>
        </div>
      </div>

      {/* <div className="hero-swiper">
        <div className="test"></div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={2}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide><img src="/images/wii1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/wii3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/wii4.png" alt="" /></SwiperSlide>
        </Swiper>
      </div> */}

    </section >
  )
}

export default Hero
