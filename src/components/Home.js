import React from 'react'
import { NavLink } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops'
import "../scss/Home.scss";


export default function Home() {

    // const fade = useSpring({
    //     from: {
    //         opacity: 0,
    //     },
    //     to: {
    //         opacity: 1
    //     }
    // })
    return (
        <div className="main-grid">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                // config={config.default}
                config={{ duration: 1500 }}
            >
                {props => (
                    <div style={props}>

                        {/* Hero-image */}
                        <section className="grid-1 hero-image">
                            <div className="hero">
                                <img src="./Images/images/accident-adult-auto-2244746.jpg" alt="man service for car" />
                                <div class="headline">
                                    <h2>Paul Nguyen</h2>
                                    <h3>Service Manager - Master ASE Certified</h3>
                                    <h3>Complete Auto Repair - Licensed Smog Check Station </h3>
                                </div>
                            </div>
                        </section>
                        <div className="slider"></div>
                    </div>


                )}

            </Spring>
            {/* Services */}
            <section className="grid-2">
                <h2>Services</h2>
                <div className="container">

                </div>
            </section>
            {/* Location & About */}
            <section className="grid-3">
                <h2>About Us</h2>
                <h3>Location</h3>
            </section>
            {/* Footer & Footer-image */}
            <footer className="grid-4 main-footer">
                <div className="footer-1 footer-image">
                    <img className="footer-img" src="./Images/images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg" alt="Bay Area" />
                </div>
                <section className="footer-2"></section>
            </footer>

        </div>
    )
}

