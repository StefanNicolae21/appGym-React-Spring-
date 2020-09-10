import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      
      &copy; FIT STUDIO {new Date().getFullYear()}
      <nav className="footer-search">More Info</nav>
      <nav className="footer-search">Contact us</nav>
      <nav className="footer-search">About us</nav>
    </div>
  );
}

export default Footer;
