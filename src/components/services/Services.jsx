import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi';
const Services = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container service_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li><BiCheck className="service_list_icon"/>
                        <p>I have experience in figma and used in few projects.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                        <p>I have experience in Proto pie and used in few projects.</p>
                        </li>
                        
                    </ul>
                </article>
                {/* UI/UX Design */}
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li><BiCheck className="service_list_icon"/>
                        <p>I have good working experience in HTML,CSS and JS, I have basic knowledge of ReactJS.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                        <p>I have basic knowledge of PHP and MySql, I have basic knowledge of backend as well.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
            
        
    )
}

export default Services
