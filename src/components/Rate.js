import React from "react";
import star from "../assets/star-inactive 1.svg";
import "../styles/Rate.scss";

const Rate = ({ selectedAccommodation }) => {
  const maxStars = 5; // Nombre maximum d'étoiles à afficher
  const rating = selectedAccommodation.rating; // Note de l'hébergement

  return (
    <div className="stars">
      {Array.from({ length: maxStars }).map((_, index) => (
        <img
          key={index}
          src={star}
          alt="star"
          className={index < rating ? "stars-color" : "stars-grey"}
        />
      ))}
    </div>
  );
};

export default Rate;
