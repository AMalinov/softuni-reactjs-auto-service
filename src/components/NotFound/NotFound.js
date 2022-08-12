import { Link } from "react-router-dom";

const NotFound =() => {
    return (
        <h2>404 Page not found <br/><Link to='/'>Go Home.</Link> </h2>
    );
}

export default NotFound;