import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (

        <>
            <div className="bg"></div>
            <section className="intro">
                <div className="container intro-wrap">
                    <div className="row no-gutters">
                        <div className="col-md-12 col-lg-9 bg-intro d-sm-flex align-items-center align-items-stretch">
                            <div className="intro-box d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <i className="flaticon-repair"></i>
                                </div>
                                <h2 className="mb-0">Don't let you'r car become this! <span>We can repair it for you!</span></h2>
                            </div>
                            <Link to="/services" className="bg-primary btn-custom d-flex align-items-center"><span>Check our services</span></Link>
                            <Link to="/comments" className="bg-primary btn-custom d-flex align-items-center"><span>Hear from our costumers</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;