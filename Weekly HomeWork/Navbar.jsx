import {Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <h1>SmartShop</h1>
            <Link to="/">Home</Link>
        </nav>
    );
}
export default Navbar;