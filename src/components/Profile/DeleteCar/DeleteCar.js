import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as carService from '../../../services/carService';

const DeleteCar = () => {
    const [currentCar, setCurrentCar] = useState({});

    const { carId } = useParams();

    useEffect(() => {
        carService.getOneCar(carId)
            .then(carData => {
                setCurrentCar(carData);
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        carService.deleteCar(carId, localStorage.getItem("accessToken"));
    }

    return (
        <div className="myCars">
            <div className="myCars-info">
                <img className="carImage" src={currentCar.imageURL} alt={currentCar.carBrand + ' ' + 'car image'} />
                <ul key={currentCar._id}>
                    <li>{currentCar.regNumber}</li>
                    <li>{currentCar.carBrand}</li>
                    <li>{currentCar.year}</li>
                    <li>{currentCar.carMilage}</li>
                    <li>{currentCar.description}</li>
                    <li>{currentCar.ownerEmail}</li>
                    {/* <Link to={`/car/${car._id}/edit`} key={car._id} className="btn btn-outline-light btn-lg px-5 edit">Edit</Link> */}
                    <Link to={`/car/${currentCar._id}`} onClick={onSubmit} key={currentCar._id} className="btn btn-outline-light btn-lg px-5 remove">Remove</Link>
                </ul>
            </div>
        </div>
    );
}

export default DeleteCar;