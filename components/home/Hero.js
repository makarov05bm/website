import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="img">
          <Image src='/images/main.png' width={300} height={300} placeholder='blur' blurDataURL='/images/tree.jpg' alt='My photo' />
        </div>
        <div className="hero-content">
          <h1>Retro Games Studio</h1>
          <p>The place where both gamers and game developers spend their good time sharing best vibes and comming up with ideas that will last in memories of many generations to come!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
