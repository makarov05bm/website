import React, { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IoLogoOctocat } from 'react-icons/io'
import ContactScreen from '../pages/contact'
import BlogContext from '../store/contactContext'

const Header = () => {
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
                            <Link legacyBehavior href='/'>
                                <a>
                                    {/* <IoLogoOctocat /> */}
                                    Retro Muse
                                </a>
                            </Link>
                        </h2>
                        <ul>
                            <li>
                                <Link href='/posts'>Blogs</Link>
                            </li>
                            <li>
                                <a href='https://sites.google.com/view/retromuse-privacy-policy/home' target="_blank">Privacy Policy</a>
                            </li>
                            <li className='btn' onClick={toggle}>
                                Contact
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
