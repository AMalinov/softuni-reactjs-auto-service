import { Link } from "react-router-dom";
const MyCars = ({
    car
}) => {
    return (
        <div className="myCars">
            <div className="myCars-info">
                <ul key={car._id}>
                    <img src={car.imageURL} />
                    <li>{car.carBrand}</li>
                    <li>{car.year}</li>
                    <li>{car.carMilage}</li>
                    <li>{car.description}</li>
                    <li>{car.ownerEmail}</li>
                </ul>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default MyCars;