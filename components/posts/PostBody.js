import React from 'react'
import PostDetails from './PostDetails'
import PostHeader from './PostHeader'

const PostBody = ({ post }) => {
  return (
    <section className='single-post'>
        <PostHeader title={post.title} image={`/images/${post.slug}/${post.image}`} content={post.content} date={post.date} description={post.description} />
        <PostDetails  />
    </section>
  )
}

export default PostBody
