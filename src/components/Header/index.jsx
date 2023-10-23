import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "../../styles/Header.scss";

function Header() {
  // Utiliser useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Déterminer quelle classe appliquer en fonction de l'URL actuelle
  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about";

  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="logo-header" />

      <nav>
        <Link to="/" className={isHomeActive ? "active" : ""}>
          Accueil
        </Link>
        <Link to="/about" className={isAboutActive ? "active" : ""}>
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
