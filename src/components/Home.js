import React from 'react'
import { NavLink } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops'

// Subcomponents
import ServiceFlips from './subcomponents/ServiceFlips';


// CSS
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
            {/* 
                    ENGINES: Transmission Repair. TIMING BELTS
                    Star Certifed: Smog Check & Testing
                    Oil Change
                    Tires Check, Removal:  BRAKE PADS
                    Battery Replacement
                     Installation
                    
                     */}
            <section className="grid-2">
                <h2>Services</h2>
                <div className="container service-cards">

                    <div className="box">
                        <ServiceFlips front={<EngineF />} back={<EngineB />} />
                    </div>

                    <div className="box">
                        <ServiceFlips front={<SmogF />} back={<SmogB />} />
                    </div>
                    <div className="box">
                        <ServiceFlips front={<OilF />} back={<OilB />} />
                    </div>
                    <div className="box">
                        <ServiceFlips front={<BrakesF />} back={<BrakesB />} />
                    </div>

                    <div className="box">
                        <ServiceFlips front={<BatteryF />} back={<BatteryB />} />
                    </div>
                    <div className="box">
                        <ServiceFlips front={<InstallF />} back={<InstallB />} />
                    </div>

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

// const Front = props => <div className="front" />
// const Back = props => <div className="back" />

const EngineF = props => <div className="front"><img src="./Images/icons/png/042-engine-1.png" width="100px" alt="engine" /><br />Engine</div>;
const EngineB = props => <div className="back">We fix E</div>;

const SmogF = props => <div className="front"><img src="./Images/icons/png/002-exhaust-pipe.png" width="100px" alt="Smog" /><br />Smog Test</div>;
const SmogB = props => <div className="back">We fix E</div>;

const OilF = props => <div className="front"><img src="./Images/icons/png/045-gasoline.png" width="100px" alt="Oil" /><br />Oil Change</div>;
const OilB = props => <div className="back">We fix E</div>;

const BrakesF = props => <div className="front"><img src="./Images/icons/png/028-brake.png" width="100px" alt="brakes" /><br />Brakes Replacement</div>;
const BrakesB = props => <div className="back">We fix E</div>;

const BatteryF = props => <div className="front"><img src="./Images/icons/png/017-battery.png" width="100px" alt="battery" /><br />Battery Replacement</div>;
const BatteryB = props => <div className="back">We fix E</div>;

const InstallF = props => <div className="front"><img src="./Images/icons/png/031-car-lights.png" width="100px" alt="Install" /><br />Other Installation</div>;
const InstallB = props => <div className="back">We fix E</div>;

