import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const toggleMenu = () => {
        const sideMenu = document.querySelector(".nav_side_bar");
        const menuIcon = document.querySelector(".menu-icon");

        if (sideMenu.classList.contains("showw")) {
            sideMenu.classList.remove("showw");
            menuIcon.classList.remove("fa-close");
            menuIcon.classList.add("fa-bars");
        } else {
            sideMenu.classList.add("showw");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-close");
        }
    };
    return (
        <>
            <div className="nav_cont">
                <div className="contt">
                    <div className="add">
                        <p>jaiswalyashika79@gmail.com</p>
                        <p className='eight'>India Delhi East Shahdara</p>
                    </div>
                    <span className='nine'>
                        call now : <h3>8448260587</h3>
                    </span>
                </div>
            </div>
            <div className="nav">
                <div className="contt">
                    <div className="logo">Website</div>
                    <ul>
                        <Link to={'/'}><li> Home </li></Link>
                        <Link to={'/about'}><li>About</li> </Link>
                         <Link to={'/service'}><li>Services</li></Link>
                        <Link to={'/payment'}><li>Payment</li></Link>
                        <Link to={'/contact'}><li>Contact</li></Link>
                    </ul>
                    <i className='fas fa-bars menu_icon' onClick={toggleMenu} ></i>
                    
                </div>
            </div>
<div className="nav_side_bar">
     <ul>
                        <Link to={'/'}><li> Home </li></Link>
                        <Link to={'/about'}><li>About</li> </Link>
                         <Link to={'/service'}><li>Services</li></Link>
                        <Link to={'/payment'}><li>Payment</li></Link>
                        <Link to={'/contact'}><li>Contact</li></Link>
                    </ul>
</div>
        </>
    )
}

export default Header