import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="wrap">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-3 d-flex align-items-center">
                        <Link className="navbar-brand home" to="/">
                            Autoservice<span>.</span>
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col">
                                <div className="top-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-location-arrow" />
                                    </div>
                                    <div className="text">
                                        <span>Address</span>
                                        <span>Sofia, Bulgaria</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="top-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone" />
                                    </div>
                                    <div className="text">
                                        <span>Phone</span>
                                        <span>123 456 7890</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="top-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-briefcase" />
                                    </div>
                                    <div className="text">
                                        <span>Monday - Friday</span>
                                        <span>09:00 to 17:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;