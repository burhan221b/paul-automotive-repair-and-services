import React from 'react'
import { NavLink } from 'react-router-dom'

// Stylesheet
import "../scss/Nav.scss";

const Nav = () => {
    return (
        <header>
            <div className="nav">
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
