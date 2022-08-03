import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="fa fa-bars" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <Link to="/" className="nav-link btn-custom">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link btn-custom">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">
                                Logout
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* TODO: use user's ID for the correct link !!! */}
                            <Link to="/my-sevices" className="nav-link">
                                My Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* TODO: see if you need this link !!! */}
                            <Link to="/about-us" className="nav-link">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;