import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaWrench } from 'react-icons/fa';




// Stylesheet
import "../scss/Nav.scss";

class Nav extends React.Component {
    state = { checked: false }

    // This function was created to help close menu items after link is clicked
    handleCheckboxChange = () => {
        let bool = this.state.checked;
        this.setState({ checked: !bool })
    }

    render() {
        return (
            <header>
                <div className="info-banner">
                    <ul>
                        <li>
                            {/* <ul>
                                <li>ASE</li>
                                <li>Star Smog</li>
                            </ul> */}
                        </li>
                        <li className="phone"><a href="tel:4082452122"><MdPhone /> <span className="red">(408)245-2122</span></a></li>
                        <li className="email"><a href="mailto:nguyen.paul1965@gmail.com" target="_top"><MdEmail /> <span className="red">nguyen.paul1965@gmail.com</span></a></li>

                    </ul>
                </div>
                <div className="nav">
                    {/* For Logo and Animation */}
                    <div id='logo'>
                        <NavLink className="" to="/" exact>
                            {/* <img className='animated fadeInDown' src="./Images/logo/logo5.png" alt="Paul Nguyen Automotive Repair Service" /> */}
                            <h1><span className="blue">Paul<FaWrench className="wrench" /> s</span></h1>
                            <h2>Automotive Repair and Services</h2>
                        </NavLink>
                        {/* <h2 className='title'>Complete Automotive Repair<br /><a href="tel:4082452122"><span className="red">(408)245-2122</span></a></h2> */}
                    </div>
                    {/* All for Navigation links and Toggle */}
                    <label htmlFor="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle" checked={this.state.checked} onChange={this.handleCheckboxChange} />
                    <div className="menu">
                        <a href="/" onClick={this.handleCheckboxChange}>Home</a>
                        <a href="#services" onClick={this.handleCheckboxChange}>Services</a>
                        <a href="#about" onClick={this.handleCheckboxChange}>About</a>
                        <a href="#contact" onClick={this.handleCheckboxChange}>Contact</a>

                        {/* <NavLink to="/" exact onClick={this.handleCheckboxChange}>Home</NavLink> */}
                        {/* <NavLink to="/" exact onClick={this.handleCheckboxChange}>Home</NavLink> */}
                        {/* <NavLink to="#services" exact onClick={this.handleCheckboxChange}>Services</NavLink> */}
                        {/* <NavLink to="#about" exact onClick={this.handleCheckboxChange}>About</NavLink> */}
                        {/* <NavLink to="#contact" exact onClick={this.handleCheckboxChange}>Contact</NavLink> */}
                        {/* <NavLink to="/services" exact onClick={this.handleCheckboxChange}>Services</NavLink>
                        <NavLink to="/about" exact onClick={this.handleCheckboxChange}>About</NavLink>
                        <NavLink to="/contact" exact onClick={this.handleCheckboxChange}>Contact</NavLink> */}
                    </div>
                </div>
            </header >
        )
    }
}

export default Nav
