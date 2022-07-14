import React from 'react'
import './Experience.css'
import {SiHtml5} from 'react-icons/si';
import {TbBrandCss3} from 'react-icons/tb';
import {SiBootstrap} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {IoLogoJavascript} from 'react-icons/io';
import {SiPhp} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {SiPython} from 'react-icons/si';
import {FaCopyright} from 'react-icons/fa';
const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Developer</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <SiHtml5 className="experience_details_icons"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <TbBrandCss3 className="experience_details_icons"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <IoLogoJavascript className="experience_details_icons"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiBootstrap className="experience_details_icons"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <GrReactjs className="experience_details_icons"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Developer</h3>
                        <div className="experience_content">
                            <article className="experience_details">
                                <SiPhp className="experience_details_icons"/>
                                <div>
                                    <h4>PHP</h4>
                                    <small className="text-light">Basic</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <SiMysql className="experience_details_icons"/>
                                <div>
                                    <h4>MySql</h4>
                                    <small className="text-light">Basic</small> 
                                </div>
                            </article>
                        </div>
                        <hr />
                        <div className="other"> 
                            
                            <h3>Other Technologies</h3>
                            <div className="experience_content">
                            <article className="experience_details">
                                <SiPython className="experience_details_icons"/>
                                <div>
                                    <h4>Python</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <FaCopyright className="experience_details_icons"/>
                                <div>
                                    <h4>C</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            </div>
                        </div>
                        
                </div>
            </div>
        </section>
            
        
    )
}

export default Experience
