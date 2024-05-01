import Link from 'next/link'
import React from 'react'
import SwiperComponent from './SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import { SiGamejolt } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GameList = () => {
    return (
        <section className='game-list'>
            <h1>Our New Featured Game</h1>
            <div className="container">
                <div className="games-icon">
                    <SiGamejolt className='icon' />
                </div>
                <div className="game">
                    <div className="swiper">
                        <SwiperComponent>
                            <SwiperSlide><img src="/images/wii8.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii5.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii7.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii2.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii3.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii4.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/wii6.png" alt="" /></SwiperSlide>
                        </SwiperComponent>

                    </div>
                    <div className="content">
                        {/* <div className="game-icon">
                            <img src="/images/wii-icon.png" alt="" />
                        </div> */}
                        <h2>What Is It?</h2>
                        <p>Guess hidden objects. Unlock +100 wallpapers. Chill and Expand your vocabulary!</p>
                        <ul>
                            <li>
                                <b>Release Data:</b>
                                <p>Coming soon</p>
                            </li>
                            <li>
                                <b>Platform:</b>
                                <p>Android</p>
                            </li>
                            <li>
                                <b>In-App Purchaches:</b>
                                <p>No</p>
                            </li>
                            <li>
                                <b>Game Category:</b>
                                <p>Puzzles</p>
                            </li>
                            <li>
                                <b>Status:</b>
                                <p>Not Released</p>
                            </li>
                            <li>
                                <b>Size:</b>
                                <p>70MB</p>
                            </li>
                        </ul>
                        <Link href='/'><IoLogoGooglePlaystore className='icon' /> See on Play Store</Link>
                        <a href="https://sites.google.com/view/retromuse-privacy-policy/home" className='pp'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameList
