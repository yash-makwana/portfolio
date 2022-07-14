import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
const Footer = () => {
    return (
        <footer>
            
                <a href="#" className="footer_logo">Yash Makwana</a>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.facebook.com/yash.makwana.9406/"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/yash_makwana_/"><SiInstagram /></a>
                </div>
                
                <div className="footer_copyright">
                    <small>&copy; All rights reserved.</small>
                </div>
            
        </footer>
    )
}

export default Footer
