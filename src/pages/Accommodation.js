import React from "react";
import { accommodationList } from "../datas/accommodationList";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import { useParams, Navigate } from "react-router-dom";
import "../styles/Accommodation.scss";
import Rate from "../components/Rate";

const Accommodation = () => {
  const { id } = useParams(); // Récupère l'ID du paramètre d'URL
  const selectedAccommodation = accommodationList.find(
    (accommodation) => accommodation.id === id
  );

  // Si l'ID n'est pas valide, effectuer une redirection
  if (!selectedAccommodation) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="accommodation-container">
      <Slideshow pictures={selectedAccommodation.pictures} />

      <div className="grid-container">
        <div className="title-and-location">
          <h2 className="title-accommodation">{selectedAccommodation.title}</h2>
          <div className="location">{selectedAccommodation.location}</div>
        </div>

        <div className="host">
          <div className="host-name">{selectedAccommodation.host.name}</div>
          <img
            src={selectedAccommodation.host.picture}
            alt={"host" + selectedAccommodation.host.name}
          />
        </div>

        <div className="tags">
          {selectedAccommodation.tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <Rate selectedAccommodation={selectedAccommodation} />
      </div>

      <div className="buttons-collapse">
        <div className="container-collapse-accommodation">
          <Collapse
            title="Description"
            content={selectedAccommodation.description}
          ></Collapse>
        </div>
        <div className="container-collapse-accommodation">
          <Collapse
            title="Equipements"
            content={selectedAccommodation.equipments}
            className="equipments"
          ></Collapse>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
