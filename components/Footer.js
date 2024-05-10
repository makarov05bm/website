import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className='footer'>
      © {new Date().getFullYear()} RetroMuse Studios - All Rights Reserved

      {/* <div className="socials">
        <a href="https://discord.gg/TefyyAsHux"><FaDiscord className='icon' /></a>
        <a href="https://www.facebook.com/RetroMuse.Games"><ImFacebook2 className='icon' /></a>
        <a href="https://www.youtube.com/channel/UCdCx0mwHTOFHbzZPQGLFXag"><IoLogoYoutube className='icon' /></a>
        <a href="https://www.instagram.com/retro_muse_games/"><RiInstagramFill className='icon' /></a>
        <a href="https://play.google.com/store/apps/dev?id=6651652287601100028"><FaGooglePlay className='icon' /></a>
        <a href="https://www.tiktok.com/@retro_muse_"><FaTiktok className='icon' /></a>
      </div> */}
    </footer>
  )
}

export default Footer
