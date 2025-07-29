import React from 'react'
import Header from './include/header';
import Footer from './include/footer';
import './about.css'
import Cards from './hooks/cards';

const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="blur">
                    <p>About Us</p>
                    <h1>About Us</h1>
                </div>
            </div>
            
            <Cards/>
            <Footer />
        </>
    )
}

export default About;