import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">HNDRX</label>
      <ul className={isNavOpen ? 'open' : ''}>
        <i className="fa fa-xmark" onClick={() => setIsNavOpen(!isNavOpen)}></i>

        <div className='ul-tags'>
          <li>
            <a className="active" href="#" onClick={() => setIsNavOpen(!isNavOpen)}>Home</a>
          </li>
          <li><a href="#about" onClick={() => setIsNavOpen(!isNavOpen)}>About</a></li>
          <li><a href="#prj" onClick={() => setIsNavOpen(!isNavOpen)}>Projects</a></li>
        </div>
      </ul>
    </nav>
  );
};

export default AppNavbar;
