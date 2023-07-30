import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';

function QueryComponent() {
  useEffect(() => {
      let xButton = document.getElementById('xmark')
      let ul = document.getElementById('ul')
      let bars = document.getElementById('bars')
      let aBtn = document.querySelectorAll('#aBtn');

      xButton.addEventListener('click', () => {
        ul.style.top = '-500em';
      });

      bars.addEventListener('click', () => {
          ul.style.top = '0em'
      });

      aBtn.forEach((button) => {
        button.addEventListener('click', () => {
          ul.style.top = '500em';
        });
      });
}, []);
}

const AppNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className='fixed-top'>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i id='bars' className="fas fa-bars"></i>
      </label>

      <div className='nav-wrapper'>
        <label className="logo">HNDRX</label>

        <ul id='ul' className={isNavOpen ? 'open' : ''}>
          <i id='xmark' className="fa fa-xmark" onClick={() => setIsNavOpen(!isNavOpen)}></i>

          <div className='ul-tags'>
            <li>
              <a id='aBtn' href="#" onClick={() => setIsNavOpen(!isNavOpen)}>Home</a>
            </li>
            <li><a href="#about" id='aBtn' onClick={() => setIsNavOpen(!isNavOpen)}>About</a></li>
            <li><a href="#projects" id='aBtn' onClick={() => setIsNavOpen(!isNavOpen)}>Projects</a></li>
            <li><a href="#contacts" id='aBtn' onClick={() => setIsNavOpen(!isNavOpen)}>Contacts</a></li>
          </div>
        </ul>
      </div>

      <QueryComponent/>
    </nav>
  );
};

export default AppNavbar;