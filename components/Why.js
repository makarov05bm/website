import React from 'react'
import { SiFastapi } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";

const Why = () => {
    return (
        <section className='why'>
            <h1 className="title">
                Take action
            </h1>

            <div className="container">
                <div className="main-content">
                    <article>
                        <div className="icon">
                            <RiTeamFill className='logo' />
                        </div>

                        <div className="title">
                            Full Support
                        </div>
                        <p>
                            Get quality products in short times
                        </p>
                    </article>

                    <article>
                        <div className="icon">
                            <SiFastapi className='logo' />
                        </div>

                        <div className="title">
                            Fast Dilivery
                        </div>
                        <p>
                            Get quality products in short times
                        </p>
                    </article>

                    <article>
                        <div className="icon">
                            <SiUnity className='logo' />
                        </div>

                        <div className="title">
                            Quality Code
                        </div>
                        <p>
                            Get quality products in short times
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Why
