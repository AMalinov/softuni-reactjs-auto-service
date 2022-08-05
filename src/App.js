import { Route, Routes } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';
import useLocalStorage from "./hooks/useLocalStorage";
import * as carService from "./services/carService"

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Comments from './components/Comments/Comments';
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


function App() {
    const [cars, setCars] = useState([]);


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
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<OurServices user={user} />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/comments" element={<Comments user={user} />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/add-car" element={<AddCar />} />
                        <Route path="/profile" element={<Profile cars={cars} email={user.email} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
