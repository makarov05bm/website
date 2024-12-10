import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const ContactForm = ({ active }) => {
    const [open, setOpen] = useState(active)
    return (
        <div className='container'>
            <h1>Send me a message</h1>
            <form>
                <div className="double-form-control">
                    <div className="form-control">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder='Enter your name' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder='Enter your email' />
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" placeholder='Enter your message'></textarea>
                </div>
                <div className="cta">
                    <button className='btn'>Send</button>
                </div>
            </form>
            <span className='exit'>
                <IoClose className='icon' />
            </span>
        </div>
    )
}

export default ContactForm