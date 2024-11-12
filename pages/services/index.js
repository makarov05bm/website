import React from 'react'
import Image from 'next/image'
import { IoPieChartSharp } from "react-icons/io5";
import Link from 'next/link';
import { IoColorPalette } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from '../../components/Footer';
import { IoMdBrowsers } from "react-icons/io";
import { Link as LocalLink, animateScroll as scroll } from "react-scroll";

const Services = () => {
    return (
        <section className='services' id='services'>
            <div className="container">
                <div className="header">
                    <h1>Our services</h1>
                    <hr className="line"></hr>
                    <p>We offer high-quality IT solutions for you or your company, with tailored pricing
                        and exclusive <span className='special'>special offers</span> for our valued customers!</p>
                </div>

                <div className="sec">
                    <div className="icon">
                        <IoLogoGameControllerB className='ic' />
                    </div>

                    <div className="content">
                        <h2>Game Development</h2>
                        <p>Bring your game ideas to life with our top-tier game development services.<br></br><br></br>
                            We specialize in concept design, programming, 2D/3D art <br /> and testing across various platforms. Leverage our expertise in game mechanics, storytelling, and interactive design to bring your vision to reality.<br></br><br></br>
                            Partner with us for a complete development cycle from ideation to launch and post-release support.</p>
                        <LocalLink smooth={true} to='contact' className='link'>Contact us</LocalLink>
                    </div>

                    <div className="img">
                        <div className="items">
                            <div className="item">
                                Gamification
                            </div>
                            <div className="item">
                                Game Design
                            </div>
                            <div className="item">
                                Prototyping
                            </div>
                            <div className="item">
                                Programming
                            </div>
                            <div className="item">
                                Game art
                            </div>
                            <div className="item">
                                QA Testing
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec-rev">
                    <div className="icon">
                        <IoColorPalette className='ic' />
                    </div>

                    <div className="img-rev">
                        <div className="items">
                            <div className="item">
                                Character Design
                            </div>
                            <div className="item">
                                Vector Art
                            </div>
                            <div className="item">
                                Sketching
                            </div>
                            <div className="item">
                                Environment Art
                            </div>
                            <div className="item">
                                Concept Art
                            </div>
                            <div className="item">
                                Animation
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <h2>Digital Art</h2>
                        <p>Elevate your project with stunning digital art created by our talented artists. From intricate character designs to immersive environments and dynamic animations, our 2D art services are crafted to enhance the visual appeal and storytelling of your project.<br></br><br></br>
                            We specialize in various art styles, ensuring that each element perfectly aligns with your game's aesthetic and narrative.</p>
                        <LocalLink smooth={true} to='contact' className='link'>Contact us</LocalLink>
                    </div>
                </div>

                <div className="sec-web">
                    <div className="icon">
                        <IoMdBrowsers className='ic' />
                    </div>

                    <div className="content">
                        <h2>Web Development</h2>
                        <p>Our Full Stack Web Development service delivers <br /> end-to-end solutions for dynamic web applications.<br></br><br></br>
                            We excel in front-end and back-end development, <br /> responsive design, database management, and API integration. Ensure seamless user experiences and efficient server-side functionality with our expertise. Partner with us to bring your web project to life and receive comprehensive maintenance support.</p>
                        <LocalLink smooth={true} to='contact' className='link'>Contact us</LocalLink>
                    </div>

                    <div className="img">
                        <div className="items">
                            <div className="item">
                                Front-End
                            </div>
                            <div className="item">
                                Back-End
                            </div>
                            <div className="item">
                                Ui UX Design
                            </div>
                            <div className="item">
                                DB Management
                            </div>
                            <div className="item">
                                Deployment
                            </div>
                            <div className="item">
                                Maintenance
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec-data">
                    <div className="icon">
                        <IoPieChartSharp className='ic' />
                    </div>

                    <div className="img-rev">
                        <div className="items">
                            <div className="item">
                                Data Integration
                            </div>
                            <div className="item">
                                Advanced Analytics
                            </div>
                            <div className="item">
                                Consultation
                            </div>
                            <div className="item">
                                Data Visualization
                            </div>
                            <div className="item">
                                ML Models
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <h2>Data Analytics</h2>
                        <p>Unlock the full potential of your data with our Data Analytics services.<br></br><br></br>
                            We specialize in seamless data integration, advanced analytics using predictive modeling and machine learning, and intuitive data visualization. Gain real-time insights with customized reports and expert consulting on data strategy to drive business growth and informed decision-making.</p>
                        <LocalLink smooth={true} to='contact' className='link'>Contact us</LocalLink>
                    </div>
                </div>

            </div>

            <div className="container-spe">
                <div className="header-spe">
                    <h1>Special Offers</h1>
                    <img src='/images/dd.png' />
                </div>

                <hr className="line"></hr>

                <div className="header-sec">
                    <div className="title">
                        3-in-One Pakage
                    </div>
                    <p>A comprehensive solution that combines our core services into one seamless offering:</p>
                </div>

                <div className="main-content">
                    <div className="box">
                        <div className="main-box">
                            <img src="/images/box.png" alt="" className="main-box" />
                            <img src="/images/box1.png" alt="" className="box1" />
                            <img src="/images/box2.png" alt="" className="box2" />
                            <img src="/images/box3.png" alt="" className="box3" />
                            <img src="/images/plus.png" alt="" className="plus" />
                        </div>
                    </div>

                    <div className="why">
                        <p className="text">
                            Why <span>3-in-one</span> package?
                        </p>
                        <ul>
                            <li>High-quality, custom-developed game.</li>
                            <li>A coherent, visually stunning website design for your game.</li>
                            <li>Full development of your game’s website.</li>
                        </ul>

                        <b>Consistent, Unique, Matching the theme !</b>
                    </div>
                </div>

                <p className="sec-text">
                    Get a fully integrated solution that covers all aspects of game creation and online presence, providing a cohesive and engaging experience for your audience.
                </p>

                <LocalLink smooth={true} to='contact' className='link'>Order now</LocalLink>
            </div>

            <div className="contact-container" id="contact">
                <div className="form">
                    <div className="title">
                        Need a service?
                    </div>

                    <hr className="line"></hr>

                    <form action="">
                        <h3>contact us</h3>

                        <div className="double">
                            <div className="item">
                                <label htmlFor="">Full Name<span>*</span></label>
                                <input type="text" placeholder='Full Name' />
                            </div>
                            <div className="item">
                                <label htmlFor="">Email<span>*</span></label>
                                <input type="text" placeholder='Email' />
                            </div>
                        </div>

                        <div className="single">
                            <label htmlFor="">Service<span>*</span></label>
                            <select id="services">
                                <option value="game" selected>Game Development</option>
                                <option value="web">Web Development</option>
                                <option value="data">Data Analytics</option>
                                <option value="art">Digital Art</option>
                                <option value="pack">3-in-One Pakage</option>
                            </select>
                        </div>

                        <div className="single">
                            <label htmlFor="">Describe your project<span>*</span></label>
                            <textarea name="" id="" placeholder='Your Message ...'></textarea>
                        </div>

                        <button>Send</button>
                    </form>
                </div>

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
            </div>

            <Footer />
        </section>
    )
}

export default Services
