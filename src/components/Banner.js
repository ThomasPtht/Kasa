import React from "react";
import { useLocation } from "react-router-dom";
import banner from "../assets/banner.png";
import bannerAbout from "../assets/banner-about.png";
import "../styles/Banner.scss";

const Banner = () => {
  // Utiliser useLocation pour obtenir l'URL courante
  const location = useLocation();

  // Déterminer quelle bannière afficher en fonction de l'URL
  const isHomePage = location.pathname === "/";
  const bannerImage = isHomePage ? banner : bannerAbout;

  // Déterminer si le titre doit être affiché
  const showTitle = isHomePage;

  return (
    <div className="banner">
      <img src={bannerImage} alt="bannière kasa" className="banner-img" />
      {showTitle && (
        <div className="title">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
