import { Link } from "react-router-dom";
import './MyCars.css';
const MyCars = ({
    car
}) => {

    console.log(car);
    return (
        <div className="myCars">
            <div className="myCars-info">
                <img className="carImage" src={car.imageURL} alt={car.carBrand + ' ' + 'car image'} />
                <ul key={car._id}>
                    <li>{car.regNumber}</li>
                    <li>{car.carBrand}</li>
                    <li>{car.year}</li>
                    <li>{car.carMilage}</li>
                    <li>{car.description}</li>
                    <li>{car.ownerEmail}</li>
                    <Link to={`/car/${car._id}/edit`} key={car._id} className="btn btn-outline-light btn-lg px-5 edit">Edit</Link>
                    <Link to={`/car/${car._id}/delete`} key={car._id} className="btn btn-outline-light btn-lg px-5 remove">Remove</Link>
                </ul>
            </div>
        </div>
    );
}

export default MyCars;