import { Link } from "react-router-dom";

import './AboutUs.css';

import { Helmet } from "react-helmet";

const AboutUs = () => {

    return (
        <>
            <Helmet>
                <title>AutoService | About Us</title>
            </Helmet>
            <div className="about-wrapper">
                <div className="">
                    <div className="header">
                        <h2>Why to choose our service?</h2>
                    </div>

                    <div className="container">
                        <div className="tb_text_wrap">
                            <p className="body">
                                Uncompromising quality, correctness and respect - with these qualities
                                most of our customers describe us. We stick to professionalism, we devote
                                special attention to detail and we have a personal approach to every
                                customer. Our team consists of certified mechanics and experienced
                                technicians who treat every task carefully and responsibly.
                            </p>
                        </div>
                    </div>
                    <p className="mb-0 about">
                        <span>Don't have an account?</span>
                        <Link to="/register" className="text-white-sign-up fw-bold about">
                            Register Now
                        </Link>
                    </p>

                    <div className="from-to">
                        <p>We can take you from this <i className="fa fa-arrow-down"></i> </p>
                        <img src="./images/rusty.jpg" alt="rusty old car"/>
                        <p>To this, in no time <i className="fa fa-arrow-down"></i></p>
                        <img src="./images/restored.jpg" alt="brand new repaired car"/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutUs;