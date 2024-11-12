import React from 'react'
import Link from 'next/link';
import { FaPencilRuler } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { GiFist } from "react-icons/gi";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="about-main-content">
          <h1>About us</h1>
          <hr className="line" />
          <p>Discover RetroMuse, the vibrant fusion of innovation and nostalgia in gaming, proudly from Algeria 🇩🇿<br></br><br></br>
            We are iconic, passionate creators dedicated to redefining gaming excellence.<br></br><br></br><br></br>

            <b>Join our journey to unite a robust gaming community and shape the future of interactive entertainment !</b><br></br>
            RetroMuse – Boundless Creativity, Algerian Spirit.</p>

          <Link href='https://discord.gg/TefyyAsHux'>
            <img src="/images/discord_btn.png" alt="" /></Link>
        </div>

        <div className="chart">
          <h1>Our Values</h1>
          <hr className="line" />
          <div className="items">
            <div className="two">
              <div className="li"></div>
              <div className="pink-li"></div>
              <div className="blue-li"></div>
              <div className="item">
                <div className="icon pen">
                  <FaPencilRuler />
                </div>

                <div className="title">Artful</div>
                <p>Redefining artistry in<br></br> entertainment</p>
              </div>

              <div className="item">
                <div className="icon idea">
                  <FaBrain />
                </div>

                <div className="title">Iconic</div>
                <p>Striving for iconic status<br></br> with every project</p>
              </div>
            </div>

            <div className="item one">
              <div className="icon fist">
                <GiFist />
              </div>

              <div className="title">Passionate</div>
              <p>Passion fuels our creative<br></br> excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
