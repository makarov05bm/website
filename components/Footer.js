import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className='footer'>
      © {new Date().getFullYear()} RetroMuse Studio. All Rights Reserved

      <div className="socials">
        <a href=""><FaDiscord className='icon' /></a>
        <a href=""><ImFacebook2 className='icon' /></a>
        <a href=""><IoLogoYoutube className='icon' /></a>
        <a href=""><RiInstagramFill className='icon' /></a>
        <a href=""><FaLinkedin className='icon' /></a>
        <a href=""><FaTiktok className='icon' /></a>

      </div>
    </footer>
  )
}

export default Footer
