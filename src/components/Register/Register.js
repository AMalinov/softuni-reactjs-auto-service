import { Link } from "react-router-dom";
import './Register.css';

import { Helmet } from "react-helmet";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router";

import * as authService from "../../services/authService";
import AuthContext from "../../contexts/AuthContext";


const Register = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerHandler = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        let { email, password} = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        authService.register(email, password).then((authData) => {
            login(authData);

            navigate("/");
        });
    };

    const textInput = useRef(null);

    const rePassValidation = (e) => {
        e.preventDefault();
        let rePassword = e.target.value;
        let password = textInput.current.value;
        if (password !== rePassword) {
            alert("Passwords must match");
        }
    };




    return (
        <>
        <Helmet>
            <title>AutoService | Register</title>
        </Helmet>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <form className="registerForm" onSubmit={registerHandler}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase" >Register</h2>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="text"
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
                                                <label className="form-label" htmlFor="password">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="rePassword"
                                                    name="rePassword"
                                                    placeholder="**********"
                                                    onBlur={rePassValidation}
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="rePassword">
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;