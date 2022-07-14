import React from 'react'
import './About.css'
import Image from '../../assets/Makwana.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container about_container">
                 <div className="about_me">
                    <div className="about_me_img">
                        <img src={Image} alt="Picture of me"/>
                    </div>
                 </div>
                 <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>0 </small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>1</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>5+ projects</small>
                        </article>
                    </div>
                    
                    <p>I'm success-driven, determined Frontend developer I have experience using HTML SCSS & JavaScript to build accessible component-based web pages and systems 
                    A passionate person willing to learn more technologies to become a better developer than i was yesterday So determined and result orietend.</p>
                    <p>I have also achieved a good understanding of relational databases. well as solid computer science foundations such as complex algorithms and code challenge type problem solving</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                 </div>

            </div>
        </section>
    )
}

export default About
