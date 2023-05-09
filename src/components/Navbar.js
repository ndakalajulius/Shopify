import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className="navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/career">Career</Link>
    </li>
  </div>
  );
}
export default Navbar;