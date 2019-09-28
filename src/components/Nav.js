import React from 'react'
import { NavLink } from 'react-router-dom'

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
                    <input type="checkbox" id="toggle" checked={this.state.checked} onChange={this.handleCheckboxChange} />
                    <div className="menu">
                        <NavLink to="/" exact onClick={this.handleCheckboxChange}>Home</NavLink>
                        <NavLink to="/services" exact onClick={this.handleCheckboxChange}>Services</NavLink>
                        <NavLink to="/about" exact onClick={this.handleCheckboxChange}>About</NavLink>
                        <NavLink to="/contact" exact onClick={this.handleCheckboxChange}>Contact</NavLink>
                    </div>
                </div>
            </header >
        )
    }
}

export default Nav
