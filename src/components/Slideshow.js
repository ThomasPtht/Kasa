import React, { useState } from "react";
import arrowBig from "../assets/big-arrow.png";
import "../styles/Slideshow.scss";

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    // Si l'index est à la première image, passer à la dernière image.
    // Sinon, décrémenter l'index de 1.
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    // Si l'index est à la dernière image, passer à la première image.
    // Sinon, incrémenter l'index de 1.
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Condition pour afficher les flèches uniquement si plus d'une image est présente
  const showArrows = pictures.length > 1;

  return (
    <div className="slideshow">
      {showArrows && (
        <img
          className="arrow-left"
          src={arrowBig}
          alt="Précédent"
          onClick={handlePreviousClick}
        />
      )}
      {pictures.length > 0 && (
        <img
          className="slideshow-image"
          src={pictures[currentImageIndex]}
          alt={` ${currentImageIndex + 1}`}
        />
      )}
      {showArrows && (
        <img
          className="arrow-right"
          src={arrowBig}
          alt="Suivant"
          onClick={handleNextClick}
        />
      )}
      {/* Affiche la pagination de l'image actuelle. */}
      {pictures.length > 1 && (
        <div className="pagination">
          {`${currentImageIndex + 1} / ${pictures.length}`}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
