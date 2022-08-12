import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as carService from '../../../../services/carService';
import './MyCarDetails.css';

const MyCarDetails = (car) => {

    const [showDialogue, setShowDialogue] = useState(false);

    const [currentCar, setCurrentCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOneCar(carId)
            .then(carData => {
                setCurrentCar(carData);
            })
    }, [carId]);

    console.log('likes -> ' + currentCar.likes);
    console.log(currentCar.usedServices);
    return (
        <div className="myCars-detailsCar">
            <h2 className="details-h2">Details for your {currentCar.carBrand} : {currentCar.regNumber}</h2>
            <div className="myCars-info">
                <img className="carImage" src={currentCar.imageURL} alt={currentCar.carBrand + ' ' + 'car image'} />
                <ul key={currentCar._id}>
                    <li>Brand : {currentCar.carBrand}</li>
                    <li>Registration number : {currentCar.regNumber}</li>
                    <li>Manufacture Year : {currentCar.year}</li>
                    <li>Car Milage : {currentCar.carMilage}</li>
                    <li>Problem Description : {currentCar.description}</li>
                    <Link to={`/profile/${currentCar._id}/edit`} className="btn btn-outline-light btn-lg px-5 edit">Edit</Link>
                    <Link to={`/profile/${currentCar._id}/delete`} className="btn btn-outline-light btn-lg px-5 remove">Remove</Link>
                </ul>
            </div>
        </div>
    );
}

export default MyCarDetails;