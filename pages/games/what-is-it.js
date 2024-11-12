import React, { useState } from 'react'
import Meta from '../../components/Meta'
import Link from 'next/link'
import { FaShapes } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import Footer from '../../components/Footer';



const WhatIsIt = () => {
    // first item is the video pic
    let imageList = [
        '111.png',
        '222.png',
        '333.png',
        '444.png',
        '555.png',
        '666.png',
        '777.png',
        '888.png',
    ]

    let [currImage, setCurrImage] = useState(0)

    return (
        <>
            <Meta title="Games | What Is It" description='' />
            <section className='game'>
                <div className="path">
                    <Link href="/">Home &gt;</Link> <span>What Is It?</span>
                </div>
                <div className="header">
                    <img src="/images/logoo.png" alt="" />
                    <h2>What is it?</h2>
                    <p>Guess the Picture</p>
                </div>

                <div className="gallery">
                    <div className="left">
                        <img src={`/images/${currImage !== 0 ? imageList[currImage - 1] : imageList[imageList.length - 1]}`} alt="" />
                    </div>
                    <div className="arr" onClick={() => {
                        if (currImage > 0) {
                            setCurrImage(currImage - 1)
                        } else {
                            setCurrImage(imageList.length - 1)
                        }
                    }}>&lt;</div>
                    <div className="middle">
                        {currImage === 0 ? (
                            <iframe
                                src="https://www.youtube.com/embed/Ng4Txcv2G6o">
                            </iframe>
                        ) : (
                            <img src={`/images/${imageList[currImage]}`} alt="gallery pic" />
                        )}
                    </div>
                    <div className="arr" onClick={() => {
                        if (currImage < imageList.length - 1) {
                            setCurrImage(currImage + 1)
                        } else {
                            setCurrImage(0)
                        }
                    }}>&gt;</div>
                    <div className="right">
                        <img src={`/images/${currImage !== imageList.length - 1 ? imageList[currImage + 1] : imageList[0]}`} alt="" />
                    </div>
                </div>

                <div className="gallery-items">
                    <div className={`item ${currImage === 0 && 'active'}`}>
                        <img src="/images/111.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 1 && 'active'}`}>
                        <img src="/images/222.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 2 && 'active'}`}>
                        <img src="/images/333.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 3 && 'active'}`}>
                        <img src="/images/444.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 4 && 'active'}`}>
                        <img src="/images/555.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 5 && 'active'}`}>
                        <img src="/images/666.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 6 && 'active'}`}>
                        <img src="/images/777.png" alt="" />
                    </div>
                    <div className={`item ${currImage === 7 && 'active'}`}>
                        <img src="/images/888.png" alt="" />
                    </div>
                </div>

                <div className="play">
                    <h2>Play Now!!</h2>

                    <div className="flex">
                        <Link href='https://play.google.com/store/apps/details?id=com.retromuse.whatisit'><img src="/images/google.png" alt="" /></Link>
                        <Link href='https://www.crazygames.com/game/what-is-it'><img src="/images/crazy.png" alt="" /></Link>
                    </div>
                </div>

                <div className="about-game">
                    <div className="content">
                        <div className="title">
                            <h3>
                                About The Game
                            </h3>
                        </div>

                        <p>
                            Welcome to -What is it?-, the captivating trivia game that offers endless hours of entertainment!<br></br><br></br>ploration as you guess the hidden object behind the tiles across various Thematic Packs, Each offering different levels of immersive gameplay. Immerse yourself in the ambiance with custom soundtracks that perfectly match each pack, setting the mood for an unforgettable gaming experience.<br></br><br></br> But the fun does not stop there! With each level you complete, unlock +100 stunning Wallpapers to adorn your device!<br></br><br></br> Need some help ? No problem! Utilize our awesome hints to aid in your quest for the hidden object: <br></br><br></br>
                            You can enjoy the game in your preferred language and even learn new ones and expand your vocabulary along the way! (English, Arabic, French, Spanish ...+5 more)
                        </p>
                    </div>

                    <div className="cubes">
                        <div className="cube">
                            <div className="header">
                                <FaShapes className='ic' />
                                GENRE
                            </div>
                            <p>Puzzle, Trivia, Offline</p>
                        </div>

                        <div className="cube">
                            <div className="header">
                                <MdDevices className='ic' />
                                PLATFORM
                            </div>
                            <p>Android, WebGL</p>
                        </div>

                        <div className="cube">
                            <div className="header">
                                <MdOutlineCalendarToday className='ic' />
                                RELEASE DATE
                            </div>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default WhatIsIt
