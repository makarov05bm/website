import React from 'react'

const PostGrid = ({ children }) => {
  return (
    <div className='posts-grid' id='blogs'>
      {children}
    </div>
  )
}

export default PostGrid