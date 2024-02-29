import About from "../components/About"
import Footer from "../components/Footer"
import Featured from "../components/home/Featured"
import Hero from "../components/home/Hero"
import Meta from "../components/Meta"
import Why from "../components/Why"
import { getFeaturedPosts } from "../lib/posts-util"

export default function HomeScreen({ posts }) {
  return (
    <>
      <Meta title="Makarov's Blog" description='My applciation security write-ups' />
      <Hero />
      <About />
      <Why />
      <Featured posts={posts} />
      <Footer />
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
