import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyCars from "./MyCars/MyCars";
import AuthContext from "../../contexts/AuthContext";

import "./Profile.css";

export default function Profile(data) {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>My Cars</h1>
                    <MyCars />
                </div>
            </div>
        </>

    );
}