import MyCars from "./MyCars/MyCars";
import { Helmet } from "react-helmet";
import * as carService from '../../services/carService';
import "./Profile.css";
import { useEffect, useState } from "react";

export default function Profile({ email }) {

    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        carService.getCarByUser(email)
            .then(result => {
                setMyCars(result);
            });
    }, [email]);
    
    return (
        <>
            <Helmet>
                <title>AutoService | Profile</title>
            </Helmet>

            <h1>My Cars</h1>
            {
                myCars.length > 0
                    ? myCars.map(x => <MyCars key={x._id} car={x} />)

                    : <h3 className="no-articles">No cars added yet!</h3>
            }
        </>
    );
}