import React from 'react'
import { SiFastapi } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";
import Link from 'next/link';
import { IoGameController } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { IoMdBrowsers } from "react-icons/io";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { VscGame } from "react-icons/vsc";
import { CgGames } from "react-icons/cg";
import { ImPacman } from "react-icons/im";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoCodeSharp } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

const Why = () => {
    return (
        <section className='why'>
            <h1 className="title">
                Our Services
            </h1>

            <hr className="line" />

            <p>We offer high-quality IT solutions for you or your company, with tailored pricing <br></br>
                and exclusive special offers for our valued customers!</p>

            <div className="container">
                <div className="main-content">
                    <article>
                        <div className="stick">
                            <CgGames />
                        </div>

                        <div className="pacman">
                            <ImPacman />
                        </div>

                        <div className="ps">
                            <IoLogoGooglePlaystore />
                        </div>

                        <div className="main-icon">
                            <IoGameController />
                        </div>
                        <h2>Game Development</h2>

                        <div className="content">
                            <ul>
                                <li>Custom Game Development</li>
                                <li>Gamification Solutions</li>
                                <li>Consulting</li>
                            </ul>
                            <div className="img">
                                <img src="/images/game_service.png" alt="" />
                            </div>
                        </div>

                        <Link href='/services' className='btn'>SEE MORE</Link>
                    </article>

                    <article>
                        <div className="web">
                            <IoMdBrowsers />
                        </div>

                        <div className="code">
                            <IoCodeSharp />
                        </div>

                        <div className="main-icon">
                            <IoMdBrowsers />
                        </div>
                        <h2>Web Development</h2>

                        <div className="content">
                            <ul>
                                <li>Responsive Design</li>
                                <li>Full Stack Development</li>
                                <li>Custom Web Applications</li>
                            </ul>
                            <div className="img">
                                <img src="/images/webs.png" alt="" />
                            </div>
                        </div>

                        <Link href='/services' className='btn'>SEE MORE</Link>

                    </article>

                    <article>
                        <div className="stat">
                            <FiBarChart2 />
                        </div>

                        <div className="search">
                            <IoSearchSharp />
                        </div>

                        <div className="main-icon">
                            <IoPieChartSharp />
                        </div>
                        <h2>Data Analytics</h2>

                        <div className="content">
                            <ul>
                                <li>Predictive Analytics</li>
                                <li>Data Visualization</li>
                                <li>Data Integration</li>
                            </ul>
                            <div className="img">
                                <img src="/images/datas.png" alt="" />
                            </div>
                        </div>

                        <Link href='/services' className='btn'>SEE MORE</Link>

                    </article>

                    <article>
                        <div className="brush">
                            <FaPaintBrush />
                        </div>

                        <div className="palette">
                            <IoColorPaletteSharp />
                        </div>

                        <div className="main-icon">
                            <IoColorPalette />
                        </div>
                        <h2>Digital Art</h2>

                        <div className="content">
                            <div className="lists">
                                <ul>
                                    <li>Vector Art</li>
                                    <li>Concept Art</li>
                                    <li>Character design</li>
                                </ul>
                                <ul>
                                    <li>2D Animation</li>
                                    <li>GUI</li>
                                </ul>
                            </div>
                            <div className="img">
                                <img src="/images/arts.png" alt="" />
                            </div>
                        </div>

                        <Link href='/services' className='btn'>SEE MORE</Link>

                    </article>
                </div>
            </div>
        </section>
    )
}

export default Why
