import React from 'react'
import Image from 'next/image'
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const About = () => {
  const age = Math.floor((new Date() - new Date('october 05 2002')) / 31536000000)

  return (
    <section className='about'>
      <div className="container">
        <div className="about-main-content">
          <span>Know More</span>
          <h1>about Retro Games</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At error laudantium eveniet maiores itaque rem suscipit molestiae esse, iste ab numquam consequatur hic. Sunt non perspiciatis, temporibus modi laboriosam ab dolorem alias quibusdam ipsa, rerum natus ex veniam labore nemo!</p>
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
                    <p className="title">Mobile Development</p>
                    <span>Shops, productivity, communication...</span>
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
