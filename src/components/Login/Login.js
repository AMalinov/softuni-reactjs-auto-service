import { Link } from "react-router-dom";
import "./Login.css"

import { Helmet } from 'react-helmet';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import * as authService from "../../services/authService";


const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get("email");
        let password = formData.get("password");

        authService
            .login(email, password)
            .then((authData) => {
                login(authData);

                navigate("/");
            })
            .catch((err) => {
                alert(err);
            });
    };


    return (
        <>
            <Helmet>
                <title>AutoService | Login</title>
            </Helmet>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                            >
                                <form className="loginForm" onSubmit={loginHandler}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase"
                                            >Login</h2>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="email@example.com"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="**********"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">
                                                    Password
                                                </label>
                                            </div>
                                            <button
                                                className="btn btn-outline-light btn-lg px-5"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="bottom">
                                            <p className="mb-0">
                                                <span>Don't have an account?</span>
                                                <Link to="/register" className="text-white-sign-up fw-bold">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;