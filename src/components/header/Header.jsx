import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocial from './HeaderSocial.jsx'
import ME from '../../assets/ysh.jpg'

const Header = () => {
    return (
        <header>
        <div className=".container header__container">
            <h5>Hello, I'm</h5>
            <h1>Yash Makwana</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocial />
            <div className="me">
                <img src={ME} alt="Picture of me" />
            </div>
            <a href="#contact" className="scroll_down">Scroll Down</a>
            
            </div>
        </header>
    )
}

export default Header
