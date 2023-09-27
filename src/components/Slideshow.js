import React, { useState } from "react";
import arrowBig from "../assets/big-arrow.png";
import "../styles/Slideshow.scss";

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    // Si l'index est à la première image, passez à la dernière image.
    // Sinon, décrémentez l'index de 1.
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    // Si l'index est à la dernière image, passez à la première image.
    // Sinon, incrémentez l'index de 1.
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        className="arrow-left"
        src={arrowBig}
        alt="Précédent"
        onClick={handlePreviousClick}
      />

      {pictures.length > 0 && (
        <img
          className="slideshow-image"
          src={pictures[currentImageIndex]}
          alt={` ${currentImageIndex + 1}`}
        />
      )}

      <img
        className="arrow-right"
        src={arrowBig}
        alt="Suivant"
        onClick={handleNextClick}
      />
    </div>
  );
};

export default Slideshow;
