import { Route, Routes } from 'react-router-dom';
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

function App() {
    return (
        <div id="box-container">
            <Header />
            <Navigation />
            <main className="main-display">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<OurServices />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/comments" element={<Comments />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
