import React from 'react'
import './Portfolio.css'
import Data from './portfolio_data'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    Data.map(({id,img,title,github,demo}) => {
                    return (
                        <article key={id} className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={img} alt="Image of Project"/>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-cta">
                        <a href={github} className="btn " target="_blank">GitHub</a>
                    </div>
                </article>
                    );
                })
                }
            </div>
        </section>
            
        
    )
}

export default Portfolio
