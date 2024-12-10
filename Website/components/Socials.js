import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoDiscord } from "react-icons/io5";

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://discord.gg/TefyyAsHux"><IoLogoDiscord className='icon discord' /></a>
            <a href="https://www.facebook.com/RetroMuse.Games"><ImFacebook2 className='icon' /></a>
            <a href="https://www.youtube.com/channel/UCdCx0mwHTOFHbzZPQGLFXag"><IoLogoYoutube className='icon' /></a>
            <a href="https://www.instagram.com/retro_muse_games/"><RiInstagramFill className='icon' /></a>
            <a href="https://play.google.com/store/apps/dev?id=6651652287601100028"><FaGooglePlay className='icon' /></a>
            <a href="https://www.tiktok.com/@retro_muse_"><FaTiktok className='icon' /></a>
        </div>
    )
}

export default Socials