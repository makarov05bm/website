import React from 'react'
import Meta from '../../components/Meta'
import PostGrid from '../../components/posts/PostGrid'
import PostItem from '../../components/posts/PostItem'
import { getAllPosts } from '../../lib/posts-util'

const AllPostsScreen = ({ posts }) => {
  return (
    <>
      <Meta title="" description='My write-ups' />
      <section className='all-posts'>
        <div className="header">
          <span>Read the lastest writings of our team!</span>
          <h1>
            Browse Our Blogs
          </h1>
        </div>
        <div className='all-posts-main-content'>
          <div className="container">
            <PostGrid>
              {posts.map((post, index) => {
                return (
                  <div key={index}>
                    <PostItem title={post.title} image={`/images/${post.slug}/${post.image}`} date={post.date} description={post.description} slug={post.slug} />
                  </div>
                )
              })}
            </PostGrid>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    }
  }
}

export default AllPostsScreen
