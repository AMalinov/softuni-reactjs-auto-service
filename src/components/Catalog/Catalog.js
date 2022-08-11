import './Catalog.css';
import CatalogItem from './CatalogItem/CatalogItem';

const Catalog = ({ cars }) => {

    return (
        <section id="catalog-page">
            <h1>All Cars in service</h1>

            {cars.length > 0
                ? cars.map(x => <CatalogItem key={x._id} car={x} />)
                : <h3 className="no-cars">Everithing is fixed for now. No cars in service.</h3>
            }
        </section>

    );
}

export default Catalog;