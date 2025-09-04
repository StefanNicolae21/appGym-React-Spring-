import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      
      &copy; FIT STUDIO {new Date().getFullYear()}
      <a href = "/moreInfo" class="footer-search">More Info</a>
      <a href = "/contact" class="footer-search">Contact us</a>
      <a href = "/about" class="footer-search">About us</a>
    </div>
  );
}

export default Footer;
