import { Link } from "react-router-dom";
import './MyCars.css';
const MyCars = ({
    car
}) => {

    // console.log(car);
    return (
        <div className="myCars">
            <div className="myCars-info">
                <img className="carImage" src={car.imageURL} alt={car.carBrand + ' ' + 'car image'} />
                <ul key={car._id}>
                    <li>{car.regNumber}</li>
                    <Link to={`${car._id}/details`} className="btn btn-outline-light btn-lg px-5 edit">Details</Link>
                </ul>
            </div>
        </div>
    );
}

export default MyCars;