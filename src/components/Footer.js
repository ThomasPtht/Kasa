import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="kasa" className="logo" />
      <div className="copyright">&copy; 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
