import React from 'react'
import { SiFastapi } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";

const Why = () => {
    return (
        <section className='why'>
            <h1 className="title">
                Why Retro Muse
            </h1>

            <div className="container">
                <div className="main-content">
                    <article>
                        <div className="icon">
                            <SiFastapi className='logo' />
                        </div>

                        <div className="title">
                            Artful
                        </div>
                        <p>
                            Artistry in Entertainment, Redefined
                        </p>
                    </article>

                    <article>
                        <div className="icon">
                            <RiTeamFill className='logo' />
                        </div>

                        <div className="title">
                            Passionate
                        </div>
                        <p>
                            Passion fuels our creative excellence
                        </p>
                    </article>

                    <article>
                        <div className="icon">
                            <SiUnity className='logo' />
                        </div>

                        <div className="title">
                            Iconic
                        </div>
                        <p>
                            Striving for Iconic Excellence.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Why
