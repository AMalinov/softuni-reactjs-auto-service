import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import * as carService from '../../../services/carService';
import './DeleteCar.css';
const DeleteCar = () => {
    const [currentCar, setCurrentCar] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { carId } = useParams();


    useEffect(() => {
        carService.getOneCar(carId)
            .then(carData => {
                setCurrentCar(carData);
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        carService.deleteCar(carId, user.accessToken).then(navigate("/"));
    }

    return (
        <>
            <h2>You are about to remove this car</h2>
            <div className="myCars-delete">
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
                        <button onClick={onSubmit} className="btn btn-outline-light btn-lg px-5 remove">Remove</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DeleteCar;