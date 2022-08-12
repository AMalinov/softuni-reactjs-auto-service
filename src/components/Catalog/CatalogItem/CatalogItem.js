import './CatalogItem.css';
const CatalogItem = ({ car }) => {
    return (
        <div className="catalog">
            <div className="all-cars-in-service">
                <div className="all-cars-info">
                    <h3>Brand : {car.carBrand}</h3>
                    <h3>Registration Number : {car.regNumber}</h3>
                    <img src={car.imageURL} className="carImage" />
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;