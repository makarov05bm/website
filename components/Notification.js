import React from 'react'

const Notification = ({ title, body, status }) => {
  return (
    <div className={`notification ${status}`}>
        <p className='title'>{title}</p>
        <p className='body'>{body}</p>
    </div>
  )
}

export default Notification