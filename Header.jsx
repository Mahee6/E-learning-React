
import React from 'react';
import './Header.css';
import logo from "../img/img.png"

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/gallary">Gallary</a></li>
          <li><a href="/registration">Registration</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/contactdetails">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

