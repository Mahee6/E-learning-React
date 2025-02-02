import React from 'react';
import './Footer.css'; 
import 'font-awesome/css/font-awesome.min.css'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 My Awesome Website</p>
        <p>All Rights Reserved</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i> {/* Instagram Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

