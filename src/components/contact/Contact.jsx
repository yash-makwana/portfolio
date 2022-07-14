import React,{useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_pks2ux9', 'template_7uxxz3f', form.current, '1z0yI45N_g_xT2g56');
        e.target.reset();
      };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option_icon"/>
                        <h4>Email</h4>
                        <h5>yashmakwana40@gmail.com</h5>
                        <a href="mailto:yashmakwana40@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsMessenger className="contact_option_icon"/>
                        <h4>Messenger</h4>
                        <h5>Yash Makwana</h5>
                        <a href="https://m.me/yash.makwana.9406" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option_icon"/>
                        <h4>What's App</h4>
                        <h5>+91**********</h5>
                        <a href="https://api.whatsapp.com/send?phone=917805046767" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your FullName" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required>
                    </textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
            
    )
}

export default Contact
