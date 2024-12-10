import React from 'react'
import { SiFastapi } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/";

const Team = () => {
    return (
        <section className='team why' id='team'>
            <h1 className="title">
                Meet the RetroMusers
            </h1>

            <hr className="line" />

            <p className='first'>Developers? Artists?... <span className="green">RetroMusers</span> ✅</p>

            <div className="container">
                <div className="main-content">
                    <div className="sider">
                        <article>
                            <header>
                                <div className="member">
                                    <img src="images/p1.png" alt="" />

                                    <div className="links">
                                        <span>See more</span>

                                        <div className="icons">
                                            <Link href='/'><FaLinkedin className='ic' /></Link>
                                            <Link href='/'><FaFacebookSquare className='ic' /></Link>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Data Analyst
                                </p>
                            </header>

                            <div className="title">
                                Karima Benzahra
                            </div>
                        </article>
                    </div>

                    <div className="double">
                        <article>
                            <header>
                                <div className="member">
                                    <img src="images/p2.png" alt="" />

                                    <div className="links">
                                        <span>See more</span>

                                        <div className="icons">
                                            <Link href='/'><FaLinkedin className='ic' /></Link>
                                            <Link href='/'><FaFacebookSquare className='ic' /></Link>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Founder<br></br>
                                    Lead Game Design & Development
                                </p>
                            </header>

                            <div className="title">
                                Youcef Belkhiri
                            </div>
                        </article>

                        <article>
                            <header>
                                <div className="member">
                                    <img src="images/p4.png" alt="" />

                                    <div className="links">
                                        <span>See more</span>

                                        <div className="icons">
                                            <Link href='/'><FaLinkedin className='ic' /></Link>
                                            <Link href='/'><FaFacebookSquare className='ic' /></Link>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Audio Producer<br></br>
                                    Freelancer
                                </p>
                            </header>

                            <div className="title">
                                Hisenburgg
                            </div>
                        </article>
                    </div>

                    <div className="sider">
                        <article>
                            <header>
                                <div className="member">
                                    <img src="images/mark.png" alt="" />

                                    <div className="links">
                                        <span>See more</span>

                                        <div className="icons">
                                            <Link href='/'><FaLinkedin className='ic' /></Link>
                                            <Link href='/'><FaFacebookSquare className='ic' /></Link>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Digital Artist
                                </p>
                            </header>

                            <div className="title">
                                G.mARK
                            </div>
                        </article>
                    </div>
                </div>

                <div className="kofi">
                    <h3>
                        Love our Work?
                    </h3>

                    <p>Help fuel our creativity!<br></br> Buy the team a cup of coffee to keep us energized and crafting the games you love</p>

                    <Link href='https://ko-fi.com/retromusestudio'>
                        <img src="/images/kofi.png" alt="" /></Link>
                </div>
            </div>
        </section>
    )
}

export default Team
