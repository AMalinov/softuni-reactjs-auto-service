import "./OurServices.css";

const OurServices = () => {
    return (
        <div className="autho-services">
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Ние предлагаме услуги</span>
                            <h2>Нашите автомобилни услуги</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-car-service" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Oil change</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eius?
                                    </p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-tyre" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Tire change</h3>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, aperiam!
                                    </p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-battery" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Batery</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum.</p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-car-engine" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Engine repair</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, soluta.</p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-tow-truck" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Emergency car</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, nisi.
                                    </p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className="d-block d-flex">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-repair" />
                                </div>
                                <div className="media-body pl-3">
                                    <h3 className="heading">Car maintenance</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, pariatur.
                                    </p>
                                    <p>
                                        <button className="btn-my-custom">
                                            Order Service
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurServices;