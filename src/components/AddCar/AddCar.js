import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import * as carService from '../../services/carService'
import { v4 as uuid } from 'uuid';
import './AddCar.css';

const AddCar = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const addCarHandler = (e) => {
        e.preventDefault();

        let postData = new FormData(e.currentTarget);

        let _id = uuid();
        let year = postData.get("year");
        let imageURL = postData.get("carImage");
        let carBrand = postData.get("carBrand");
        let carMilage = postData.get("milage");
        let description = postData.get("description");
        let ownerEmail = user.email;

        console.log(description);

        carService
            .addCar(
                {
                    _id,
                    year,
                    imageURL,
                    carBrand,
                    carMilage,
                    description,
                    ownerEmail,
                },
                user.accessToken
            )
            .then(navigate('/'));
    };


    return (
        <section className="py-5 addForm" id="offer-trip-page">
            <h1>Add Car</h1>
            <div className="container add-car">
                <div>
                    <form onSubmit={addCarHandler} method="post">
                        <div className="offer-label">
                            <label htmlFor="year">
                                <i className="far fa-calendar-alt" /> Year
                            </label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="year"
                                placeholder="1990"
                                name="year"
                            />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="carImage">Car Image</label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="carImage"
                                placeholder="https://..."
                                name="carImage"

                            />
                            <div>
                                <label htmlFor="carBrand">Car Brand</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control-2"
                                    id="carBrand"
                                    placeholder="Audi"
                                    name="carBrand"
                                />
                            </div>
                        </div>
                        <div className="offer-label">
                            <label htmlFor="milage">Milage/KM</label>
                        </div>
                        <div className="form-group offer-input">
                            <input
                                type="text"
                                className="form-control-2"
                                id="milage"
                                placeholder="100000"
                                name="milage"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                placeholder="What is the problem with the car..."
                                name="description"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary addCar">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddCar;
