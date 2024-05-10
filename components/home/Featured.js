import React from 'react'
import PostGrid from '../posts/PostGrid'
import PostItem from '../posts/PostItem'
import ProjectItem from '../projects/ProjectItem'

const Featured = ({ posts }) => {
  return (
    <section className='featured'>
      <div className="container">
        <h1>Discover Featured Posts</h1>
        <PostGrid>
          {posts.slice(0, 4).map((post, index) => {
            return (
              <PostItem key={index} title={post.title} image={`/images/${post.slug}/${post.image}`} date={post.date} description={post.description} slug={post.slug} />
            )
          })}
        </PostGrid>
      </div>
    </section>
  )
}

export default Featured
