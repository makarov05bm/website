import React, { useContext, useState, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import BlogContext from '../store/contactContext'
import axios from 'axios'
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        service: 'game'
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_77s32od', // Replace with your EmailJS service ID
            'template_52gj924', // Replace with your EmailJS template ID
            formData,
            'jfBiruYx-sjKUmsjA' // Replace with your EmailJS user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setResponseMessage('Message sent successfully!');
        }).catch((error) => {
            console.error('FAILED...', error);
            setResponseMessage('Failed to send the message.');
        });
    };

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

        await emailjs.sendForm('service_8q5pnus', 'template_52gj924', form.current, 'M2DTteEmC5eDsNph8')

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
            <section className='contact' id='join'>
                <div className='container'>
                    <h1>Join us</h1>
                    <hr className="line" />

                    <p>Looking to collaborate?<br></br> Have suggestions? Or simply want to connect?<br></br><br></br>
                        We're eager to hear from you!</p>

                    <div className="forms">
                        <div className="form">
                            <form action="" onSubmit={handleSubmit}>
                                <h3>contact us</h3>

                                <div className="double">
                                    <div className="item">
                                        <label htmlFor="">Full Name<span>*</span></label>
                                        <input type="text" placeholder='Full Name'
                                            onChange={handleChange}
                                            name="name"
                                            required />
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Email<span>*</span></label>
                                        <input type="text" placeholder='Email'
                                            onChange={handleChange}
                                            name="email"
                                            required />
                                    </div>
                                </div>

                                <div className="single">
                                    <label htmlFor="">Service<span>*</span></label>
                                    <select id="services" onChange={handleChange}
                                        name="service"
                                        required>
                                        <option value="game" selected>Game Development</option>
                                        <option value="web">Web Development</option>
                                        <option value="data">Data Analytics</option>
                                        <option value="art">Digital Art</option>
                                        <option value="pack">3-in-One Pakage</option>
                                    </select>
                                </div>

                                <div className="single">
                                    <label htmlFor="">Describe your project<span>*</span></label>
                                    <textarea name="message" id="" placeholder='Your Message ...'
                                        onChange={handleChange}
                                        required></textarea>
                                </div>

                                <button type='submit'>Send</button>
                                <p>{responseMessage}</p>
                            </form>
                        </div>

                        <div className="join">
                            <div className="inner">
                                <h3>Join Our Community </h3>

                                <p>Stay updated with our latest news, game releases and exclusive content</p>

                                <div className="links">
                                    <Link href=''><img src="/images/li.png" alt="" /></Link>
                                    <Link href='https://www.facebook.com/RetroMuse.Games'><img src="/images/fb.png" alt="" /></Link>
                                    <Link href='https://play.google.com/store/apps/dev?id=6651652287601100028'><img src="/images/ps.png" alt="" /></Link>
                                    <Link href='https://www.instagram.com/retro_muse_games/'><img src="/images/ig.png" alt="" /></Link>
                                    <Link href='https://discord.gg/TefyyAsHux'><img src="/images/discord.png" alt="" /></Link>
                                    <Link href='https://www.tiktok.com/@retro_muse_'><img src="/images/tik.png" alt="" /></Link>
                                    <Link href='https://www.youtube.com/channel/UCdCx0mwHTOFHbzZPQGLFXag'><img src="/images/yt.png" alt="" /></Link>
                                </div>

                                <h3 className='spe'>Subscribe to our Newsletter</h3>

                                <p>Get the latest updates, special offers, and exclusive content directly to your inbox</p>

                                <form action="">
                                    <input type="text" placeholder='Email Address' />
                                    <button>Join</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact