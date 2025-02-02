import React from 'react'
import './Experience.css'
import { SiHtml5, SiBootstrap, SiPhp, SiMysql, SiPython, SiPandas, SiNumpy, SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { TbBrandCss3 } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCopyright } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa'; // For Matplotlib

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">

                {/* Data Science Technologies Card */}
                <div className="experience_datascience">
                    <h3>Data Science Technologies</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <SiPython className="experience_details_icons"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiPandas className="experience_details_icons"/>
                            <div>
                                <h4>Pandas</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiNumpy className="experience_details_icons"/>
                            <div>
                                <h4>NumPy</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiTensorflow className="experience_details_icons"/>
                            <div>
                                <h4>TensorFlow</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiPytorch className="experience_details_icons"/>
                            <div>
                                <h4>PyTorch</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiScikitlearn className="experience_details_icons"/>
                            <div>
                                <h4>Scikit-Learn</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <FaChartLine className="experience_details_icons"/>
                            <div>
                                <h4>Matplotlib</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Frontend Technologies Card */}
                <div className="experience_frontend">
                    <h3>Frontend Technologies</h3>
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

                {/* Backend Technologies Card */}
                <div className="experience_backend">
                    <h3>Backend Technologies</h3>
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
                                <h4>MySQL</h4>
                                <small className="text-light">Basic</small> 
                            </div>
                        </article>
                    </div>
                    <hr />

                    {/* Other Technologies */}
                    <div className="other"> 
                        <h3>Other Technologies</h3>
                        <div className="experience_content">
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
