import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import ScrollableAnchor, { goToTop } from 'react-scrollable-anchor';

// Subcomponents
import ServiceFlips from './subcomponents/ServiceFlips';
import YelpReviewCard from '../components/subcomponents/YelpReviewCard';

// ReactStrap causes some issues with card animation
// import EmailModal from './EmailModal';

// CSS
import "../scss/Home.scss";

export default function Home() {
    return (
        < div className="main-grid" >
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
                                <div className="headline">
                                    <h2>Paul Nguyen</h2>
                                    <h3>Service Manager - Master ASE Certified</h3>
                                    <h3>Complete Auto Repair - Licensed Smog Check Station</h3>
                                    <h3 className="worklogos">
                                        <img src="./Images/logo/aseLogo.png" alt="Smog" />
                                        <img src="./Images/logo/SMOGLOGO.jpg" alt="Smog certified" />
                                    </h3>
                                </div>
                                <div className="credits headline-credits">Photo by Malte Lu from Pexels </div>
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
            <ScrollableAnchor id={'services'}>
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
            </ScrollableAnchor>

            {/* Location & About */}
            <ScrollableAnchor id={'about'}>
                <section className="grid-3">
                    {/* <img src="./Images/svg/auto.svg" alt="background image" /> */}
                    <h2>About Us - <span style={{ color: "#083b66" }}>Meet Paul!</span></h2>
                    <div className="about-container">
                        <p>... and his team of mechanics and auto service experts.
Paul is an ASE Master technician, servings the Great Silicon Community for more than 15 years.
Over the years he’s been through it all from installing a simple side rails for a truck to a complete repair of a broken transmission.
He personally picked his team of technician and mechanics to handle any auto repair and service you need. No nickel and dimming, just saving you money with the best quality service.
</p>
                    </div>
                    <div className="reivews">
                        <h2><span className="yelp-font">yelp</span> Reivews</h2>
                        <div className="grid-reivews">
                            <YelpReviewCard name={"Linda H."} quote={"it's true, Paul is a life saver! We are from out of town visiting family and our car started overheating. We took the car to Mathilda Valero Auto Repair for a diagnosis and quote for repair. He is honest!! and a good mechanic! That speaks volumes about his character. He gave his profess…"} reviewlink={"https://www.yelp.com/biz/mathilda-valero-station-auto-services-sunnyvale?hrid=7fzvSWILXmmmJTwbLmCcnQ"} />

                            <YelpReviewCard name={"Nakata D."} quote={"I had my car cheked in here because of the engine light on. I thought there was sth wrong with my engine. But they have good and honest mechanic here who told me that I just need to change the oil and reset the light. They also have nice price of changing oil and free estimate if your have has any …"} reviewlink={"https://www.yelp.com/biz/mathilda-valero-station-auto-services-sunnyvale?hrid=IlGxYGG5Ug60ZAQUKePTGA"} />
                            <YelpReviewCard name={"Kiwi W."} quote={"Paul is great - always on schedule, very patient, and tells me exactly what should be fixed and what doesn't really need to be fixed.I drive an old honda ('91) that looks like and is indeed falling apart and a friend recommended me to go to Paul. He took a look at the car and told me a couple of…"} reviewlink={"https://www.yelp.com/biz/mathilda-valero-station-auto-services-sunnyvale?hrid=Pn5UpP0rbGcpqjhzG9KSyA"} />
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>

            {/* Footer & Footer-image */}
            <ScrollableAnchor id={'contact'}>
                <footer className="grid-4 main-footer" style={{ position: 'relative' }}>
                    {/* <div id={'contact'} style={{ zIndex: "10", position: "absolute", top: "30%" }}><div><EmailModal style={{ fontWeight: "700" }}>Contact US</EmailModal></div></div> */}
                    <div className="footer-1 footer-image">
                        <img className="footer-img" src="./Images/images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg" alt="Bay Area" />

                        <h3>Need Service? Just Call, Or Show Up - That Simple</h3>



                        <div className="headline">
                            <ul>
                                <p>Address</p>
                                <li>498 N. Mathilda Avenue, Sunnyvale, CA 94085</li>
                                <p>Business Hours</p>
                                <li>Open 7 Days: <span>8:30 AM</span> - <span>6 PM</span></li>
                                <p>Direct Contact</p>
                                <li>Phone: <a href="tel:4082452122">(408) 245 - 2122</a></li>
                                <li>Fax:(408) 245 - 1211</li>
                            </ul>
                        </div>
                        <div className="credits headline-credits">Photo by Maarten van den Heuvel on Unsplash</div>
                    </div>

                    <section className="footer-2">
                        {/* Credits */}
                        {/* Burhan */}
                        {/* <div className="burhan"><Link to="https://www.github.com/burhan221b"><img src="./Images/logo/Burhan221b-logo2.png" width="50" alt="Created by Burhan" /></Link> &copy;2019. Proudly Created by Burhan</div> */}
                        <div className="burhan"><a href="https://www.github.com/burhan221b"><img src="./Images/logo/Burhan221b-logo3.png" width="25" alt="Created by Burhan" /></a> &copy;2019. Proudly Created by Burhan</div>
                        {/* Freepik */}
                        {/* <div className="">Icons made by <Link to="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</Link> from <Link to="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></div> */}
                        <div className="">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </section>
                </footer>
            </ScrollableAnchor>
        </div >
    )
}

// const Front = props => <div className="front" />
// const Back = props => <div className="back" />

const EngineF = props => <div className="front"><img src="./Images/icons/png/042-engine-1.png" width="100px" alt="engine" /><br />Engine</div>;
const EngineB = props => <div className="back"><ul className="service-text">

    <li>Tune Ups</li>
    <li>Transmission Repair</li>
    <li>Belt Alignment and Repair</li>

</ul>


</div>;

const SmogF = props => <div className="front"><img src="./Images/icons/png/002-exhaust-pipe.png" width="100px" alt="Smog" /><br />Smog Test</div>;
const SmogB = props => <div className="back"><ul className="service-text">

    <li>Smog Check and Testing</li></ul></div>;

const OilF = props => <div className="front"><img src="./Images/icons/png/045-gasoline.png" width="100px" alt="Oil" /><br />Oil Change</div>;
const OilB = props => <div className="back"><ul className="service-text">

    <li>
        Quick and Easy Oil Change
     </li>
    <li>
        Premium oil
     </li>

</ul></div>;

const BrakesF = props => <div className="front"><img src="./Images/icons/png/028-brake.png" width="100px" alt="brakes" /><br />Brakes Replacement</div>;
const BrakesB = props => <div className="back"><ul className="service-text">

    <li>
        Repair and Replace brakes</li>
    <li>Replace Discs</li></ul></div>;

const BatteryF = props => <div className="front"><img src="./Images/icons/png/017-battery.png" width="100px" alt="battery" /><br />Battery Replacement</div>;
const BatteryB = props => <div className="back"><ul className="service-text">

    <li>Battery check</li>
    <li>Replacement</li></ul></div>;

const InstallF = props => <div className="front"><img src="./Images/icons/png/031-car-lights.png" width="100px" alt="Install" /><br />Other Installation</div>;
const InstallB = props => <div className="back"><ul className="service-text">


    <li>Tires Check, Removal, and Installation</li>
    <li>Exterior addition to vehicle</li>
</ul></div>;

