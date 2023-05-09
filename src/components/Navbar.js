import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/cats">Contact</Link>
    </li>
    <li>
      <Link to="/sheeps">About</Link>
    </li>
    <li>
      <Link to="/goats">Career</Link>
    </li>
  </div>
  );
}
export default Navbar;