import React, { useState } from 'react'
import Link from 'next/link';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const Games = () => {
    const games = [
        {
            title: 'what is it?',
            short: 'guess the picture',
            desc: 'Guess hidden objects. Unlock +100 wallpapers. Chill and Expand your vocabulary!',
            genre: 'Puzzle, Trivia, Offline',
            platforms: 'Android, WebGL',
            release_data: 'Coming soon',
            video: 'https://player.vimeo.com/video/1030148803',
            ps_link: 'https://play.google.com/store/apps/details?id=com.retromuse.whatisit',
            crazy_link: 'https://www.crazygames.com/game/what-is-it',
            game_link: 'what-is-it'
        },
        {
            title: 'Cyber Chaos',
            short: 'Ruined Rooms',
            desc: ' play as a pew pew punk soldier and clear rooms to progress to more difficult stages. ',
            genre: 'Action, Combat, Offline',
            platforms: 'PC (Steam)',
            video: 'https://player.vimeo.com/video/1030168867',
            release_data: 'Coming soon',
            game_link: 'cyber-chaos',
            steam_link: 'https://store.steampowered.com/app/2859520/Cyber_Chaos/'
        },
    ]

    const [cmp, setCmp] = useState(0)

    const [currGame, setCurrGame] = useState(games[cmp])


    return (
        <section className='games' id='games'>
            <header>
                <h1>Our Games</h1>
                <hr className="line" />
            </header>

            <div className="main">
                <div className="right-fade"></div>
                <div className="left-fade"></div>
                <div className="left">
                    <div className="inner-left">
                        <div className="card">
                            <img
                                src="https://i.vimeocdn.com/video/1950649354-88e53f670e7e8a03816fcbbcc3cff759855fb07b475771e6ca52d7d2ef19fabe-d_2400" >
                            </img>

                            <div className="content">
                                <h2>What is it?</h2>
                                <h3>Guess the Picture</h3>
                                <hr className="line" />
                                <p>Guess hidden objects. Unlock +100 wallpapers. Chill and Expand your vocabulary!</p>

                                <b>Genre:</b><p>Puzzle, Trivia, Offline</p>
                            </div>
                        </div>

                        <div className="right-arr"></div>
                    </div></div>

                <div className="middle">
                    <div className="inner-middle">
                        <div className="left-arr" onClick={() => {
                            if (cmp > 0) {
                                setCmp(cmp - 1)
                            } else {
                                setCmp(games.length - 1)
                            }

                            setCurrGame(games[cmp])
                        }}><IoChevronBackOutline className='ic' /></div>

                        <div className="card">
                            <iframe
                                src={games[cmp].video}>
                            </iframe>

                            <div className="content">
                                <h2>{games[cmp].title}</h2>
                                <h3>{games[cmp].short}</h3>
                                <hr className="line" />
                                <p>{games[cmp].desc}</p>

                                <b>Genre:</b><p>{games[cmp].genre}</p>
                                <b>Platforms:</b><p>{games[cmp].platforms} {games[cmp].crazy_link && games[cmp].ps_link ? (
                                    <><Link href={games[cmp].ps_link}><img src="/images/ps.png" /></Link><Link href={games[cmp].crazy_link}><img src="/images/ziggy.png" /></Link></>
                                ) : (
                                    <><Link href={games[cmp].steam_link}><img src="/images/steamm.png" /></Link></>
                                )}</p>
                                <b>Release Date:</b><p>{games[cmp].release_data}</p>

                                <Link href={`/games/${games[cmp].game_link}`} className="btn-yel">See More</Link>
                            </div>
                        </div>

                        <div className="right-arr" onClick={() => {
                            if (cmp < games.length - 1) {
                                setCmp(cmp + 1)
                            } else {
                                setCmp(0)
                            }

                            setCurrGame(games[cmp])
                        }}><IoChevronForward className='ic' /></div>
                    </div>
                </div>

                <div className="right"><div className="inner-right">
                    <div className="card">
                        <img
                            src="/images/1.PNG">
                        </img>
                    </div>
                </div></div>
            </div>

            <div className="dots">
                <div className={`dot ${cmp === 0 ? 'active' : ''}`}></div>
                <div className={`dot ${cmp === 1 ? 'active' : ''}`}></div>
            </div>
        </section>
    )
}

export default Games
