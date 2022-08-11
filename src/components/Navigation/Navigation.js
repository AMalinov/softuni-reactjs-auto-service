import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import './Navigation.css';
const Navigation = () => {

    const { user } = useContext(AuthContext);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
            <div className="container">
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/" className="nav-item nav-link btn-custom" title="Home">Home</Link></li>
                        <li className="nav-item"><Link to="/cars-in-our-service" className="nav-link"> Cars in our services </Link></li>
                        {!user.email ?
                            <>
                                <li className="nav-item"><Link to="/login" className="nav-link"> Login </Link></li>
                                <li className="nav-item"><Link to="/register" className="nav-link"> Register </Link></li>
                                <li className="nav-item"><Link to="/about-us" className="nav-link"> About Us </Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link to="/add-car" className="nav-link btn-custom" title="Services"> Add Car </Link></li>
                                <li className="nav-item"><Link to="/services" className="nav-link btn-custom" title="Services"> Services </Link></li>
                                <li className="nav-item"><Link to="/my-sevices" className="nav-link"> My Services </Link></li>
                                <li className="nav-item"><Link to="/logout" className="nav-link logout">  Logout </Link></li>
                                <li className="nav-item"><Link to="/profile" className="nav-link profile">Profile {user.email}</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;