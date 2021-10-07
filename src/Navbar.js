import { Link } from 'react-router-dom';
// sfc and then tab creates a stateless function component
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>{/* this prevents sending links to the server and internally handles the request */}
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;