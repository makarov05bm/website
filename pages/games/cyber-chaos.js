import React, { useState } from 'react'
import Meta from '../../components/Meta'
import Link from 'next/link'
import { FaShapes } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import Footer from '../../components/Footer';



const CyberChaos = () => {
    // first item is the video pic
    let imageList = [
        '1.PNG',
        '2.PNG',
        '3.PNG',
        '4.PNG',
        '5.PNG',
        '6.PNG',
        '7.PNG',
        '8.PNG',
    ]

    const [currImage, setCurrImage] = useState(0)

    return (
        <>
            <Meta title="Games | Cyber Chaos" description='' />
            <section className='game'>
                <div className="path">
                    <Link href="/">Home &gt;</Link> <span>Cyber Chaos</span>
                </div>
                <div className="total">
                    <div className="header">
                        <img src="/images/cc.png" alt="" />
                        <h2>Cyber Chaos</h2>
                        <p>Ruined Rooms</p>
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
                        <div className={`item ${currImage === 0 && 'active'}`} onClick={() => setCurrImage(0)}>
                            <img src="/images/1.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 1 && 'active'}`} onClick={() => setCurrImage(1)}>
                            <img src="/images/2.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 2 && 'active'}`} onClick={() => setCurrImage(2)}>
                            <img src="/images/3.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 3 && 'active'}`} onClick={() => setCurrImage(3)}>
                            <img src="/images/4.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 4 && 'active'}`} onClick={() => setCurrImage(4)}>
                            <img src="/images/5.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 5 && 'active'}`} onClick={() => setCurrImage(5)}>
                            <img src="/images/6.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 6 && 'active'}`} onClick={() => setCurrImage(6)}>
                            <img src="/images/7.PNG" alt="" />
                        </div>
                        <div className={`item ${currImage === 7 && 'active'}`} onClick={() => setCurrImage()}>
                            <img src="/images/8.PNG" alt="" />
                        </div>
                    </div>
                </div>

                <div className="play">
                    <h2>Play Now!</h2>

                    <div className="flex">
                        <Link href='https://store.steampowered.com/app/2859520/Cyber_Chaos/'><img src="/images/steam.png" alt="" /></Link>
                    </div>
                </div>

                <div className="about-game spe">
                    <div className="content">
                        <div className="title">
                            <h3>
                                About The Game
                            </h3>
                        </div>

                        <p>
                            Cyber Chaos is an intense Roguelite 2D action-platformer set in a dystopian cyberpunk world, where survival is your only objective. Step into the shoes of &apos;&apos;Punk,&apos;&apos; a hardened survivor navigating the chaotic cyber maze. <br></br><br></br>
                            Each level presents you with randomized rooms full of enemies, challenges, and epic bosses. Clear the room to proceed, or face death—but don&apos;t worry, in a world led by advanced technology, perishing is only temporary.<br></br><br></br>
                            As you navigate through the game&apos;s intense levels, you’ll collect powerful weapons, game-changing perks, and other valuable collectables. The game offers various guns, all of which can be unlocked and upgraded to suit your playstyle. <br></br><br></br>Visit the in-game store with every run to shop for new items, sell old gear, and upgrade your stats to prepare for the next challenge, and take a breather in the intermediate lobby between levels to strategize your next move.<br></br><br></br>
                            Every run will be different, whether you conquer the cyber maze in one go or return again and again, chaos is always waiting.
                        </p>
                    </div>

                    <div className="cubes spe">
                        <div className="cube">
                            <div className="header">
                                <MdDevices className='ic' />
                                PUBLISHER
                            </div>
                            <p><img src='/images/pub2.png' />Lunatic Publishing</p>
                        </div>

                        <div className="cube">
                            <div className="header">
                                <FaShapes className='ic' />
                                GENRE
                            </div>
                            <p>Roguelite, 2D Platformer, Singleplayer, Action-Shooter</p>
                        </div>

                        <div className="cube spe">
                            <div className="header">
                                <MdDevices className='ic' />
                                DEVELOPER
                            </div>
                            <p><img src='/images/retr.png' />RetroMuse Studios</p>
                        </div>

                        <div className="cube">
                            <div className="header">
                                <MdDevices className='ic' />
                                PLATFORM
                            </div>
                            <p>PC (Steam)</p>
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

export default CyberChaos
