import { Link } from "react-router-dom";
import './Register.css';
const Register = () => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase"
                                    >Register</h2>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label" htmlFor="typeEmailX">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Password
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Confirm Password
                                        </label>
                                    </div>
                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className="bottom">
                                    <p className="mb-0">
                                        <span>Already have an account?</span>
                                        <Link to="/login" className="text-white-sign-up fw-bold">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;