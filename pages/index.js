import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import GameList from "../components/GameList"
import Games from "../components/Games"
import Featured from "../components/home/Featured"
import Hero from "../components/home/Hero"
import Meta from "../components/Meta"
import Socials from "../components/Socials"
import Team from "../components/Team"
import Why from "../components/Why"
import { getFeaturedPosts } from "../lib/posts-util"
import { isMobile } from 'react-device-detect'
import Soon from '../components/Soon';

export default function HomeScreen({ posts }) {
  return (
    <>
      <Meta title="Retro Muse" description='Where Art and Retro meet Playfully' />
      {isMobile ? <Soon /> : (
        <><Hero />
          <About />
          <Why />
          <GameList />
          <Games />
          <Featured posts={posts} />
          <Team />
          <Contact />
          <Footer /></>
      )}
      {/* <Socials /> */}
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
  return {
    props: {
      posts: featuredPosts,
    },
  }
}
