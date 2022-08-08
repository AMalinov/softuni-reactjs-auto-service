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


    let userCars = cars.filter(x => x.ownerEmail === user.email)

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(e.target.parentElement[1].value);
        if(e.target.parentElement[0].value == 'defaultSelected') {
            alert('choose a service');
            return;
        }
    }

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
                                <option value="oil-change 30">Oil Change - 30$</option>
                                <option value="battery-check 50">Batery Check - 50$</option>
                                <option value="emergency-car 80">Emergency car - 80$</option>
                                <option value="tire-change 30">Tire change - 30$</option>
                                <option value="engine-repair 100">Engine repair - 100$</option>
                                <option value="car-maintenace 200">Car maintenance - 200$</option>
                            </select>
                            <label htmlFor="cars">Choose a car:</label>
                            <select id="cars" name="cars" className="form-control form-control-lg" onChange={e => setSelectedCar(e.target.value)}>
                                <option value="defaultSelected">Select Car</option>
                                {/* {Object.entries(cars).map(([key, car]) => (
                                    <option key={car._id}>{car.carBrand}</option>
                                ))} */}
                                {
                                    userCars.map(c => (
                                        <option key={c._id}>{c.carBrand + ' - ' + c.regNumber}</option>
                                    ))
                                }
                            </select>
                            <button
                                className="btn btn-outline-light btn-lg px-5"
                                type="submit"
                                onClick={onSubmitHandler}

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