import { useEffect, useState } from 'react';
import './Catalog.css';
import CatalogItem from './CatalogItem/CatalogItem';
import * as carService from '../../services/carService';

const Catalog = ({ cars }) => {
    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        carService.getAllCars()
            .then(result => {
                setAllCars(result);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Cars in service</h1>

            {allCars.length > 0
                ? allCars.map(x => <CatalogItem key={x._id} car={x} />)
                : <h3 className="no-cars">Everithing is fixed for now. No cars in service.</h3>
            }
        </section>

    );
}

export default Catalog;