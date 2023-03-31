import React, { useState, useEffect } from 'react';
import '../css/nadvar.css';
import logo from '../img/nadvar/logo_optimenn.ico';

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <nav className={scrollNav ? 'navbar scroll-nav' : 'navbar'}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo"><img src={logo} alt="logo" /></a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">Customers</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">News</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
