import React from "react";
import { useState } from "react";
import arrowBack from "../assets/arrow_back.png";
import arrowOpen from "../assets/arrow-open.png";
import "../styles/Collapse.scss";

const Collapse = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container-collapse">
      <button onClick={() => setToggle(!toggle)} className="button-collapsible">
        Fiabilité
        <img className="arrow-back" src={arrowBack} alt="" />
      </button>
      <div className="display-content">
        <div className="content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>

      <button className="button-collapsible">
        Respect
        <img className="arrow-back" src={arrowBack} alt="" />
      </button>
      <div className="display-content">
        <div nclassNameName="content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>
      </div>
      <button className="button-collapsible">
        Service
        <img className="arrow-back" src={arrowBack} alt="" />
      </button>
      <div className="display-content">
        <div className="content">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>
      </div>
      <button className="button-collapsible">
        Sécurité
        <img className="arrow-back" src={arrowBack} alt="" />
      </button>
      <div className="display-content">
        <div className="content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  );
};

export default Collapse;
