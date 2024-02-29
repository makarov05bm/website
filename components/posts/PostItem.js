import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostItem = ({ image, title, date, slug, description }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <article>
        <Image src={image} width={300} height={300} layout='responsive' placeholder='blur' blurDataURL={image} alt={title} />
        <div className="post-item-content">
          <h2>
            {title}
          </h2>
          <span className="date">{new Date(date).toDateString()}</span>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default PostItem
