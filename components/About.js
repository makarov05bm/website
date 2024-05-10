import React from 'react'
import Image from 'next/image'
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const About = () => {
  const age = Math.floor((new Date() - new Date('october 05 2002')) / 31536000000)

  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="about-main-content">
          <span>Know More</span>
          <h1>about Retro Games</h1>
          <p>Discover RetroMuse, the vibrant fusion of innovation and nostalgia in gaming, proudly from Algeria. We&apos;re iconic, passionate creators dedicated to redefining gaming excellence. Join our journey to unite a robust gaming community and shape the future of interactive entertainment. RetroMuse – Boundless Creativity, Algerian Spirit.</p>
        </div>
        <div className="skill-set">
          <div className="inner-skill-set">
            <h2>Diverse IT services</h2>
            <span>By top-tier developers</span>
            <article>
              <ul>
                <li>
                  <div className="icon">
                    <IoGameControllerOutline className='logo' />
                  </div>
                  <div className="text">
                    <p className="title">Game Development</p>
                    <span>Indie, 3D, multiplayer...</span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <IoGlobeOutline className='logo' />
                  </div>
                  <div className="text">
                    <p className="title">Web Development</p>
                    <span>E-commerce, managment, landing pages...</span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <FaAppStore className='logo' />
                  </div>
                  <div className="text">
                    <p className="title">Data Analysis</p>
                    <span>Basic, advanced analytics</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
