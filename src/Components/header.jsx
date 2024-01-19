import React from 'react';
import logo from './img/Logo.png';

const Header = () => {
  return (
    <div>
    <div class="circle"></div>
	  <div class="bg"></div>
    <nav className="navbar container-fluid">
      <div className="logo_header">
        <div className="logo"></div>
        <img className="gambar" src={logo} alt="" />
        <div className="logo2"></div>
        <button className="navbar_toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    
      <ul className="main_nav">
        <li className="nav-item">
          <a className="nav_links" href="#home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav_links" href="#aboutUs">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav_links" href="#ourValuable">SERVICE</a>
        </li>
        <li className="nav-item">
          <a className="nav_links" href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item contact">
          <a href="#contact"><button type="button" className="button btn-primary btn-outline-light">CONTACT US</button></a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;