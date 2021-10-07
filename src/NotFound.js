import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Go Back to HomePage . . .</Link>
        </div>
    );
}

export default NotFound;