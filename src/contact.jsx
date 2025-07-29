import React from 'react'
import Header from './include/header'
import Footer from './include/footer'
import './contact.css'
const Contact = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="blur">
                    <p>Contact Us </p>
                    <h1>Get In Touch</h1>
                </div>
            </div>
            
            <div className="contact_container">
                <div className="contt">
                    <h1>Contact Us</h1>
                    <p>Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?

                    </p>
                    <form action="">
                        <input type="text" placeholder='Your Full Name' />
                        <input type="email" name="" placeholder='Your Email Address' id="" />
                        <input type="text" placeholder='Your Query Topic' name="" id="" />
                        <input type="number" placeholder='Your Phone Number' name="" id="" />
                        <textarea name="" placeholder='Your Message' id=""></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default Contact