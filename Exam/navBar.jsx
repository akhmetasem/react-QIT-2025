import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/books">Book Gallery</Link>
  </nav>
);

export default Navbar;
