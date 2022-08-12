import { useEffect, useState } from "react";
import * as carServices from '../../../services/carService';
import OurServices from "../OurServices";

const MyServices = ({user}) => {
    const [services, setServices] = useState([]);
    // console.log(service);
    useEffect(() => {
        carServices.getCarByUser(user.email)
        .then(result => {
            console.log(result);
            setServices(result);
        })
    }, []);

    return (
        <div>
            <h1>No services used yet!</h1>
        </div>
    );
}

export default MyServices;