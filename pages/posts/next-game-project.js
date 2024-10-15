import React from 'react'
import Meta from '../../components/Meta'
import Link from 'next/link'
import Footer from '../../components/Footer';

const NextGame = ({ posts }) => {
    return (
        <>
            <Meta title="Makarov's | Posts" description='My write-ups' />
            <section className='blog-post'>
                <header>
                    <img src="/images/post1_header.png" alt="" />

                    <div className="date">MAR 26, 2024</div>

                    <div className="title">
                        <h1>What’s the next game project ?</h1>
                    </div>
                </header>

                <div className="content">
                    <div className="main">
                        <b>“What&apos;s the next game?”</b>

                        <b>“How will you choose your next game project if you’re just starting out? What will enable your project not only to avoid failure, but also to succeed?”</b>

                        <p>I ended up with some ideas on what the requirements might be for a game that is less likely to fail. In my opinion, it should belong to a less competitive genre, appeal to a wide range of ages and have a high potential for downloads.<br></br><br></br></p>

                        <p>To give you a better understanding, let’s dive into more details about these requirements:</p>

                        <h3>
                            Choosing a Less Competitive Genre :
                        </h3>

                        <p>Opt for a genre that isn’t crowded. This strategy makes it easier for your game to get noticed because there’s less competition, especially from the big names. For example, breaking into the action game market can be tough if you’re up against companies like Gameloft.</p>

                        <h3>
                            Appealing to a Wide Age Range:
                        </h3>

                        <p>Design your game with minimal age restrictions. This approach not only simplifies the approval process with app stores , but also broadens your potential audience. A game that’s accessible to all ages is more likely to see a higher number of downloads.</p>

                        <h3>Ensuring High Potential for Downloads:</h3>

                        <p>Pay attention to current trends and what games are popular, as this can guide you toward what players are looking for. However, remember to find a balance; aim for genres that are in demand but not oversaturated with competition. This balance can help ensure your game stands out while still attracting a significant number of downloads.</p><br></br>

                        <p>I dove into a bit of exploratory data analysis (EDA) on a dataset of Play Store apps to answer these questions. I focused on the games category and spent some quality time analyzing it. If you’re curious about all the nitty-gritty details, I’ve got the full report up on my GitHub for you to check out. Now, let’s chat about some of the cool insights I uncovered from this adventure!.</p>

                        <h3>
                            What are the Most Competitive Game Genres?
                        </h3>

                        <img src="/images/post1_graph.png" alt="" />
                    </div>

                    <div className="side">
                        <h2>Related Articles</h2>

                        <Link href='/'>
                            <div className="item">
                                <header>
                                    <img src="/images/blog1.png" alt="" />
                                    <div className="date">MAR 26, 2024</div>
                                </header>

                                <div className="content-in">
                                    <h3>Discover Our Latest Game</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                </div>
                            </div>
                        </Link>

                        <Link href='/'>
                            <div className="item">
                                <header>
                                    <img src="/images/blog1.png" alt="" />
                                    <div className="date">MAR 26, 2024</div>
                                </header>

                                <div className="content-in">
                                    <h3>Discover Our Latest Game</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                </div>
                            </div>
                        </Link>

                        <div className="join">
                            <h3>Join Our Community </h3>

                            <p>Stay updated with our latest news, game releases and exclusive content</p>

                            <div className="links">
                                <Link href=''><img src="/images/li.png" alt="" /></Link>
                                <Link href=''><img src="/images/fb.png" alt="" /></Link>
                                <Link href=''><img src="/images/ps.png" alt="" /></Link>
                                <Link href=''><img src="/images/ig.png" alt="" /></Link>
                                <Link href=''><img src="/images/discord.png" alt="" /></Link>
                                <Link href=''><img src="/images/tik.png" alt="" /></Link>
                            </div>

                            <h3 className='spe'>Subscribe to our Newsletter</h3>

                            <p>Get the latest updates, special offers, and exclusive content directly to your inbox</p>

                            <form action="">
                                <input type="text" placeholder='Email Address' />
                                <button>Join</button>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        </>
    )
}

export default NextGame
