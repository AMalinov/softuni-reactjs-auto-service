import { useContext } from "react";
import MyCars from "./MyCars/MyCars";
import AuthContext from "../../contexts/AuthContext";

import "./Profile.css";

export default function Profile({ cars, email }) {
    const { user } = useContext(AuthContext);
    let userCars = [];
    for (const [key, value] of Object.entries(cars)) {
        if (email == value.ownerEmail) {
            userCars.push(value);
        }
    }
    return (
        <>
            <h1>My Cars</h1>
            {
                userCars.length > 0
                    ? userCars.map(x => <MyCars key={x._id} car={x} />)

                    : <h3 className="no-articles">No cars added yet!</h3>
            }
        </>
    );
}