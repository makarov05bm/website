import React, { useContext, useState, useEffect } from 'react'
import BlogContext from '../../store/contactContext'
import Footer from '../Footer'
import Header from '../Header'
import Notification from '../Notification'
import UpArrow from '../UpArrow'

const Layout = ({ children }) => {
  const blogContext = useContext(BlogContext)

  const [active, setActive] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 160) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        {active && (
          <div onClick={handleScroll}>
            <UpArrow />
          </div>
        )}
        {blogContext.notification && <Notification {...blogContext.notification} />}
        {/* <Footer /> */}
    </>
  )
}

export default Layout