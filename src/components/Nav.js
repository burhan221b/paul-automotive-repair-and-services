import React from 'react'
import { NavLink } from 'react-router-dom'

// Stylesheet
import "../scss/Nav.scss";

const Nav = () => {
    return (
        <header>
            <div className="nav">
                {/* For Logo and Animation */}
                <div id='logo'>
                    <NavLink className="" to="/" exact>
                        <img className='animated fadeInDown' src="./Images/logo/logo.png" alt="Paul Nguyen Automotive Repair Service" />
                    </NavLink>
                    <h2 className='title'>Complete Automotive Repair<br /><span className="red">(408)245-2122</span></h2>
                </div>
                {/* All for Navigation links and Toggle */}
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <div className="menu">
                    <NavLink to="/" exact >Home</NavLink>
                    <NavLink to="/services" exact>Services</NavLink>
                    <NavLink to="/about" exact>About</NavLink>
                    <NavLink to="/contact" exact>Contact</NavLink>
                </div>
            </div>
        </header >
    )
}

export default Nav
