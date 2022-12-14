import { Route, Routes, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';
import useLocalStorage from "./hooks/useLocalStorage";
import * as carService from "./services/carService"

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import OurServices from './components/OurServices/OurServices';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import AddCar from './components/AddCar/AddCar';
import Profile from './components/Profile/Profile';
import { useEffect, useState } from 'react';
import EditCar from './components/Profile/EditCar/EditCar';
import { CarContext } from './contexts/CarContext';
import DeleteCar from './components/Profile/DeleteCar/DeleteCar';
import MyCarDetails from './components/Profile/MyCars/MyCarDetails/MyCarDetails';
import MyServices from './components/OurServices/MyServices/MyServices';
import NotFound from './components/NotFound/NotFound';


function App() {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const [user, setUser] = useLocalStorage("user", {
        _id: "",
        email: "",
        accessToken: "",
    }, {});

    const login = (authData) => {
        setUser({
            _id: authData._id,
            email: authData.email,
            accessToken: authData.accessToken,
        });
    };

    const logout = () => {
        setUser({
            _id: "",
            email: "",
            accessToken: "",
        });
    };


    const carAdd = (carData) => {
        setCars(state => [
            ...state,
            carData,
        ]);

        navigate('/catalog');
    };

    const carEdit = (carId, carData) => {
        setCars(state => state.map(x => x._id === carId ? carData : x));
    }


    useEffect(() => {
        carService.getAllCars()
            .then(result => {
                // console.log(result);
                setCars(result);
            })
    }, []);


    return (

        <AuthContext.Provider value={{ user, login, logout }}>

            <div id="box-container">
                <Header />
                <Navigation />
                <main className="main-display">
                    <CarContext.Provider value={{ cars, carAdd, carEdit }}>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<OurServices user={user} />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/cars-in-our-service" element={<Catalog cars={cars} />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/add-car" element={<AddCar />} />
                            <Route path="/my-services" element={<MyServices user={user} />} />
                            <Route path="/profile" element={<Profile cars={cars} email={user.email} />} />
                            <Route path="/profile/:carId/details" element={<MyCarDetails cars={cars} email={user.email} />} />
                            <Route path="/profile/:carId/edit" element={<EditCar />} />
                            <Route path="/profile/:carId/delete" element={<DeleteCar />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </CarContext.Provider>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
