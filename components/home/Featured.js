import React from 'react'
import PostGrid from '../posts/PostGrid'
import PostItem from '../posts/PostItem'
import ProjectItem from '../projects/ProjectItem'
import Link from 'next/link'

const Featured = ({ posts }) => {
  return (
    <section className='blogs' id='blogs'>
      <div className="container">
        <h1>Blogs</h1>
        <hr className="line" />

        <p>Discover the latest news and exciting updates from RetroMuse Studios.</p>

        <div className="blogs-grid">
          <Link href='/posts/next-game-project'>
            <div className="item">
              <header>
                <img src="/images/post1_header.png" alt="" />
                <div className="date">MAR 26, 2024</div>
              </header>

              <div className="content-in">
                <h3>Discover Our Latest Game</h3>

                <p>How will you choose your next game project if you’re just starting out? What will enable your project not only to avoid failure, but also to succeed?</p>
              </div>
            </div>
          </Link>
          <Link href='/posts/next-game-project'>
            <div className="item">
              <header>
                <img src="/images/blog1.png" alt="" />
                <div className="date">MAR 26, 2024</div>
              </header>

              <div className="content-in">
                <h3>Discover Our Latest Game</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
              </div>
            </div>
          </Link>
          <Link href='/posts/next-game-project'>
            <div className="item">
              <header>
                <img src="/images/blog1.png" alt="" />
                <div className="date">MAR 26, 2024</div>
              </header>

              <div className="content-in">
                <h3>Discover Our Latest Game</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Featured
