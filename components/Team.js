import React from 'react'
import { SiFastapi } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";

const Team = () => {
    return (
        <section className='team why'>
            <h1 className="title">
                Retro Muse Team
            </h1>

            <div className="container">
                <div className="main-content">
                    <article>
                        <div className="member">
                            <img src="images/yus.png" alt="" />
                        </div>

                        <div className="title">
                            Youcef Belkhiri
                        </div>
                        <p>
                            Founder, Lead Game Design & Development
                        </p>
                        <a className="link" href='https://www.linkedin.com/in/youcef-belkhiri-80a8a6219'>
                            <FaLinkedin className='icon linkedin' />
                        </a>
                    </article>

                    <article>
                        <div className="member">
                            <img src="images/ouu.png" alt="" />
                        </div>

                        <div className="title">
                            Oussama Messaoudi
                        </div>
                        <p>
                            Full Stack Web Developer
                        </p>
                        <a className="link">
                            <FaGlobeAfrica className='icon linkedin' />
                        </a>
                    </article>

                    <article>
                        <div className="member">
                            <img src="images/heis.jpg" alt="" />
                        </div>

                        <div className="title">
                            Hisenburgg
                        </div>
                        <p>
                            Audio Producer, Freelancer
                        </p>
                        <a className="link">
                            <FaSpotify className='icon linkedin' />
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Team
