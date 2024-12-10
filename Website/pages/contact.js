import React, { useContext, useState, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import BlogContext from '../store/contactContext'
import axios from 'axios'
import emailjs from '@emailjs/browser';

const ContactScreen = () => {
  const blogContext = useContext(BlogContext)

  const form = useRef();

  const toggle = () => {
    setName('')
    setEmail('')
    setMessage('')
    blogContext.toggleContact()
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessageHandler = async (e) => {
    e.preventDefault()

    await emailjs.sendForm('service_8q5pnus', 'template_vahgwxn', form.current, 'M2DTteEmC5eDsNph8')

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (name && email && message) {
      try {
        blogContext.showNotification({
          title: 'Pending',
          body: 'Sending your message...',
          status: 'pending',
        })

        await axios.post('/api/contact', {
          name,
          email,
          message
        }, config)

        blogContext.showNotification({
          title: 'Success',
          body: 'Message sent successfully',
          status: 'success',
        })
      } catch (error) {
        blogContext.showNotification({
          title: 'Error',
          body: 'Message could not be sent',
          status: 'danger',
        })
      }
    }

  }

  return (
    <>
      <section className='contact'>
        <div className='container'>
          <h1>Send us a message</h1>
          <form ref={form} onSubmit={sendMessageHandler}>
            <div className="double-form-control">
              <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="user_name" required placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-control">
                <label htmlFor="email">Your Email</label>
                <input type="email" required id="email" name="user_email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="cta">
              <button type='submit' className='btn'>Send!</button>
            </div>
          </form>
          <span className='exit' onClick={toggle}>
            <IoClose className='icon' />
          </span>
        </div>
        <div className="overlay" onClick={toggle}></div>
      </section>
    </>
  )
}

export default ContactScreen