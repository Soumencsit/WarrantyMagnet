import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" className="social-icon">
          <FaFacebook/>
        </a>
        <a href="https://www.instagram.com/soumen_1001/" className="social-icon">
          <AiFillInstagram/>
        </a>
       
        <a href="www.linkedin.com/in/soumen-pal-csit" className="social-icon">
          <FaLinkedin/>
        </a>
        <a href="https://www.youtube.com/@soumenpal4927" className="social-icon">
         <FaYoutube/>
        </a>
        
      </div>
      <div className="footer-content">
        <p>&copy; 2024 S.Software. All rights reserved.</p>
        <div className="footer-links">
          <a href="/home" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/review" className="footer-link">Review</a>
          <a href="/contact" className="footer-link">Contact</a>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
