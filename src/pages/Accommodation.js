import React from "react";
import { accommodationList } from "../datas/accommodationList";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import "../styles/Accommodation.scss";

const Accommodation = () => {
  const { id } = useParams(); // Récupère l'ID du paramètre d'URL
  const selectedAccommodation = accommodationList.find(
    (accommodation) => accommodation.id === id
  );

  return (
    <div>
      <Slideshow pictures={selectedAccommodation.pictures} />

      <div
        style={{
          display: "flex",
          width: "95%",
          gap: "50px",
        }}
      >
        <h2>{selectedAccommodation.title}</h2>

        <Collapse title="Description">
          {selectedAccommodation.description}
        </Collapse>

        <Collapse title="Equipements">
          {selectedAccommodation.equipments}
        </Collapse>
      </div>
    </div>
  );
};

export default Accommodation;
