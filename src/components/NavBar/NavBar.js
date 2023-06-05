import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
    </label>
    <label className="logo">HNDRX</label>
    <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#prj">Projects</a></li>
        {/* <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li> */}
    </ul>
    </nav>
  );
};

export default AppNavbar;
