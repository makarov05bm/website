import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="text">
        <img src="/images/logo.png" alt="" />
        <p>© {new Date().getFullYear()} RetroMuse Studios. All Rights Reserved</p>
        <p className='spe'><Link href="/privacy-policy">Privacy Policy</Link> <span>|</span> <Link href="terms-conditions">Terms & Conditions</Link></p>
      </div>

      <div className="socials">
        <Link href=''><img src="/images/li.png" alt="" /></Link>
        <Link href='https://www.facebook.com/RetroMuse.Games'><img src="/images/fb.png" alt="" /></Link>
        <Link href='https://play.google.com/store/apps/dev?id=6651652287601100028'><img src="/images/ps.png" alt="" /></Link>
        <Link href='https://www.instagram.com/retro_muse_games/'><img src="/images/ig.png" alt="" /></Link>
        <Link href='https://discord.gg/TefyyAsHux'><img src="/images/discord.png" alt="" /></Link>
        <Link href='https://www.tiktok.com/@retro_muse'><img src="/images/tik.png" alt="" /></Link>
        <Link href='https://www.youtube.com/channel/UCdCx0mwHTOFHbzZPQGLFXag'><img src="/images/yt.png" alt="" /></Link>

      </div>

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
