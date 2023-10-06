import React from "react";
import star from "../assets/star-inactive 1.svg";
import { useParams } from "react-router-dom";
import { accommodationList } from "../datas/accommodationList";
import "../styles/Rate.scss";

const Rate = () => {
  const { id } = useParams(); // Récupère l'ID du paramètre d'URL
  const selectedAccommodation = accommodationList.find(
    (accommodation) => accommodation.id === id
  );

  const maxStars = 5; // Nombre maximum d'étoiles à afficher
  const rating = selectedAccommodation.rating; // Note de l'hébergement

  return (
    <div className="stars">
      {Array.from({ length: maxStars }).map((_, index) => (
        <img
          key={index}
          src={star}
          alt="star"
          className={index < rating ? "stars-color" : ""}
        />
      ))}
    </div>
  );
};

export default Rate;
