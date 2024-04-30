import React from 'react'
import Image from 'next/image'
import { IoGameController } from "react-icons/io5";
import { RiGameLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="games-icon">
          <IoGameController className='icon' />
        </div>
        <div className="games-icon-2">
          <RiGameLine className='icon' />
        </div>
        <div className="img">
          <Image src='/images/main.png' width={300} height={300} placeholder='blur' blurDataURL='/images/tree.jpg' alt='My photo' />
        </div>
        <div className="hero-content">
          <h1>Retro Muse Studio</h1>
          <p>Where Art and Retro meet Playfully</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
