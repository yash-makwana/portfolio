import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container service_container">

                {/* Data Science & AI */}
                <article className="service">
                    <div className="service_head">
                        <h3>Data Science & AI</h3>
                    </div>
                    <ul className="service_list">
                        <li><BiCheck className="service_list_icon"/>
                            <p>Experience in data analysis using <strong>Pandas</strong> and <strong>NumPy</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>Data visualization with <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Plotly</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>Machine Learning expertise using <strong>Scikit-Learn</strong>, <strong>TensorFlow</strong>, and <strong>PyTorch</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>Experience with <strong>Natural Language Processing (NLP)</strong> and <strong>Large Language Models (LLMs)</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>Deep Learning applications using <strong>CNNs</strong> and <strong>RNNs</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>Model deployment with <strong>Flask</strong>, <strong>FastAPI</strong>, and <strong>Streamlit</strong>.</p>
                        </li>
                    </ul>
                </article>

                {/* UI/UX Design */}
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li><BiCheck className="service_list_icon"/>
                            <p>I have experience in <strong>Figma</strong> and used it in several projects.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>I have experience in <strong>ProtoPie</strong> and used it in a few projects.</p>
                        </li>
                    </ul>
                </article>

                {/* Web Development */}
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li><BiCheck className="service_list_icon"/>
                            <p>I have good working experience in <strong>HTML, CSS, and JavaScript</strong>. I also have basic knowledge of <strong>ReactJS</strong>.</p>
                        </li>
                        <li><BiCheck className="service_list_icon"/>
                            <p>I have basic knowledge of <strong>PHP</strong> and <strong>MySQL</strong>, as well as backend development.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services;
