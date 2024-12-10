import Link from 'next/link'
import React from 'react'
import SwiperComponent from './SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import { SiGamejolt } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoPieChartSharp } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdBrowsers } from "react-icons/io";

const GameList = () => {
    return (
        <section className='last-review'>
            <div className="container">
                <div className="review-main">
                    <div className="title">
                        Last Client Review
                    </div>

                    <hr className="line"></hr>

                    <div className="review">
                        <div className="title">
                            Lunatic Studios
                        </div>

                        <div className="pub">
                            Game publisher
                        </div>

                        <div className="icon">
                            <FaQuoteLeft className='ic' />
                        </div>

                        <div className="text">
                            RetroMuse Studios developed a game that blew us away. Their customer service is just as fantastic as the game development itself.<br></br><br></br>
                            Highly recommended.
                        </div>

                        <div className="img">
                            <img src="/images/pub.png" alt="" />
                        </div>
                    </div>
                </div>

                <Link href='/services' className="btn-yel">See Offers</Link>
            </div>
        </section>
    )
}

export default GameList
