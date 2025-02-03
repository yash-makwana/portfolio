import React from 'react';
import './Portfolio.css';
import Data from './portfolio_data';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    Data.map(({ id, title, github, description }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;
