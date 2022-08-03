import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
    return (
        <div id="box-container">
            <Header />
            <Navigation />
            <main className="main-display">
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
