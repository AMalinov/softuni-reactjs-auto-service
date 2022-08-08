import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as carService from '../../../services/carService';
import { CarContext } from "../../../contexts/CarContext";
import AuthContext from "../../../contexts/AuthContext";

const EditCar = () => {
    const { user } = useContext(AuthContext);
    const [currentCar, setCurrentCar] = useState({});
    const { carEdit } = useContext(CarContext);
    const { carId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        carService.getOneCar(carId)
            .then(carData => {
                setCurrentCar(carData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(currentCar._id);
        let email = user.ownerEmail;
        const carData = new FormData(e.target);
        // let carData = new FormData(e.currentTarget);
        // console.log(...carData);
        // console.log(currentCar);

        let carBrand = carData.get("carBrand");
        let regNumber = carData.get("regNumber");
        let year = carData.get("year");
        let imageURL = carData.get("carImage");
        let carMilage = carData.get("milage");
        let description = carData.get("description");
        let ownerEmail = email;
        // console.log(carBrand);
        // console.log(regNumber);
        // console.log(year);
        // console.log(imageURL);
        // console.log(carMilage);
        // console.log(description);
        // console.log(ownerEmail);
        console.log(carData.ownerEmail);

        let data = {
            _id: currentCar._id,
            carBrand,
            regNumber,
            year,
            imageURL,
            carMilage,
            description,
            ownerEmail: currentCar.ownerEmail
        }
        carService
            .editCar(
                currentCar._id,
                data,
                user.accessToken
            )
            .then(result => {
                carEdit(carData, result);
                navigate("/profile");
            });
    };

    return (
        <section className="py-5 addForm" id="offer-trip-page">
            <h1>Edit your {currentCar.carBrand}</h1>
            <div className="container add-car">
                <div>
                    <form onSubmit={onSubmit} method="post">
                        <div className="offer-label">
                            <div>
                                <label htmlFor="carBrand">Car Brand</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control-2"
                                    id="carBrand"
                                    placeholder="Audi"
                                    name="carBrand"
                                    defaultValue={currentCar.carBrand}
                                />
                            </div>
                            <label htmlFor="regNumber">
                                <i className="far fa-calendar-alt" /> Registration Number
                            </label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                className="form-control-2"
                                type="text"
                                id="regNumber"
                                name="regNumber"
                                placeholder="E1234EE, BEAST1"
                                defaultValue={currentCar.regNumber}

                            />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="year">
                                <i className="far fa-calendar-alt" /> Year
                            </label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="year"
                                placeholder="1990"
                                name="year"
                                defaultValue={currentCar.year}

                            />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="carImage">Car Image</label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="carImage"
                                placeholder="https://..."
                                name="carImage"
                                defaultValue={currentCar.imageURL}

                            />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="milage">Milage/KM</label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="milage"
                                placeholder="100000"
                                name="milage"
                                defaultValue={currentCar.carMilage}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Problem description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                placeholder="Flat tire..."
                                name="description"
                                defaultValue={currentCar.description}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary addCar">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EditCar;
