import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { IoLogoOctocat } from 'react-icons/io'
import ContactScreen from '../pages/contact'
import BlogContext from '../store/contactContext'
import { Link as LocalLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const blogContext = useContext(BlogContext)

    const contactRef = useRef(null)

    const toggle = () => {
        blogContext.toggleContact()
    }

    useEffect(() => {
        if (blogContext.active) {
            contactRef.current.style.display = 'block'

            const show = setTimeout(() => {
                contactRef.current.style.transition = 'opacity 0.25s ease-out'
                contactRef.current.style.opacity = '1'
            }, 100)

            return () => {
                clearTimeout(show)
            }
        } else {
            contactRef.current.style.transition = 'opacity 0.25s ease-out'
            contactRef.current.style.opacity = '0'

            const show = setTimeout(() => {
                contactRef.current.style.display = 'none'
            }, 100)

            return () => {
                clearTimeout(show)
            }
        }
    }, [blogContext.active])

    return (
        <>
            <header className='nav-header'>
                <div className="container">
                    <nav>
                        <h2>
                            <Link href='/'>
                                <img src="/images/header.png" alt="" />
                                <span>RETRO MUSE STUDIOS</span>
                            </Link>
                        </h2>
                        <h2 className='burger' onClick={() => setIsOpen(!isOpen)}>|||</h2>
                        {isOpen && (
                            <ul className="list">
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href='/#about'>About</Link>
                                </li>
                                <li onClick={() => setIsOpen(false)}>
                                    <div className="special">+ Special Offers</div>
                                    <Link href='/services'>Services</Link>
                                </li>
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href='/#games'>Games</Link>
                                </li>
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href='/#blogs'>Blogs</Link>
                                </li>
                                {/* <li>
                                <a href='https://sites.google.com/view/retromuse-privacy-policy/home' target="_blank">Privacy Policy</a>
                            </li> */}
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href='/#team'>Team</Link>
                                </li>
                                <li className='btn' onClick={() => setIsOpen(false)}>
                                    <Link href='/#join'>JOIN US</Link>
                                </li>
                            </ul>
                        )}
                        <ul className='horizon'>
                            <li>
                                <Link href='/#about'>About</Link>
                            </li>
                            <li>
                                <div className="special">+ Special Offers</div>
                                <Link href='/services'>Services</Link>
                            </li>
                            <li>
                                <Link href='/#games'>Games</Link>
                            </li>
                            <li>
                                <Link href='/#blogs'>Blogs</Link>
                            </li>
                            {/* <li>
                                <a href='https://sites.google.com/view/retromuse-privacy-policy/home' target="_blank">Privacy Policy</a>
                            </li> */}
                            <li>
                                <Link href='/#team'>Team</Link>
                            </li>
                            <li className='btn'>
                                <Link href='/#join'>JOIN US</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='parent-contact' ref={contactRef}>
                <ContactScreen />
            </div>
        </>
    )
}

export default Header
