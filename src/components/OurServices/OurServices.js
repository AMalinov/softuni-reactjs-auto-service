import "./OurServices.css";

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import * as carServices from '../../services/carService';
const OurServices = ({ user }) => {

    const [cars, setCars] = useState([]);

    const [selectedCar, setSelectedCar] = useState('');

    useEffect(() => {
        carServices.getAllCars()
            .then(result => {
                setCars(result);
            });
    }, []);


    let test = cars.filter(x => x.ownerEmail === user.email)

    return (
        <>
            <Helmet>
                <title>AutoService | Services</title>
            </Helmet>
            <div className="autho-services">
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center pb-5 mb-3">
                            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                                <h2>Our Services</h2>
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
                                <div className="d-block d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-battery" />
                                    </div>
                                    <div className="media-body pl-3">
                                        <h3 className="heading">Batery Check</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum.</p>
                                    </div>
                                </div>
                                <div className="d-block d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-car-engine" />
                                    </div>
                                    <div className="media-body pl-3">
                                        <h3 className="heading">Engine repair</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, soluta.</p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="" className="orderService">
                            <label htmlFor="service">Choose service</label>
                            <select name="service" id="service" className="form-control form-control-lg">
                                <option value="defaultSelected">Select Service</option>
                                <option value="oil-change">Oil Change</option>
                                <option value="battery-check">Batery Check</option>
                                <option value="emergency-car">Emergency car</option>
                                <option value="tire-change">Tire change</option>
                                <option value="engine-repair">Engine repair</option>
                                <option value="car-maintenace">Car maintenance</option>
                            </select>
                            <label htmlFor="cars">Choose a car:</label>
                            <select id="cars" name="cars" className="form-control form-control-lg" onChange={e => setSelectedCar(e.target.value)}>
                                <option value="defaultSelected">Select Car</option>
                                {/* {Object.entries(cars).map(([key, car]) => (
                                    <option key={car._id}>{car.carBrand}</option>
                                ))} */}
                                {
                                    test.map(c => (
                                        <option key={c._id}>{c.carBrand}</option>
                                    ))
                                }
                            </select>
                            <button
                                className="btn btn-outline-light btn-lg px-5"
                                type="submit"

                            >
                                Order Service
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default OurServices;