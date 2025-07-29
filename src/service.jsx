import React from 'react'
import Header from './include/header'
import Footer from './include/footer'
import './service.css'
import Cards from './components/cards';
const Service = () => {
    return (
        <>


            <Header />
            <div className="about">
                <div className="blur">
                    <p>Our Services</p>
                    <h1>What We Do</h1>
                </div>
            </div>
            <Cards/>
            <Footer />
        </>
    )
}

export default Service