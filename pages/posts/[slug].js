import React from 'react'
import PostBody from '../../components/posts/PostBody'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'

const PostScreen = ({ post }) => {

  return (
      <>
        <Meta title={post.title} description={post.description} />
        <PostBody post={post} />
        <Footer />
      </>
  )
}

export async function getStaticProps(context) {
  const post = getPostData(context.params.slug)

  return {
    props: {
      post,
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const slugs = getPostsFiles().map((file) => {
    return file.replace(/\.md$/, '')
  })

  return {
    paths: slugs.map(slug => ({params: { slug }})),
    fallback: false,
  }
}

export default PostScreen