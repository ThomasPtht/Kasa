import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles/Collapse.scss";

const Collapse = ({ title, content }) => {
  // Définition de l'état local "toggle" pour suivre l'état de la section (ouverte ou fermée)
  const [toggle, setToggle] = useState(false);

  // Fonction qui sera appelée lorsqu'un utilisateur clique sur le bouton pour basculer l'état.
  const handClick = () => {
    setToggle(!toggle);
  };

  // Vérifie si le contenu est un tableau.
  const isArray = Array.isArray(content);

  return (
    <>
      <button className="button-collapsible">
        {title}
        <img
          onClick={handClick}
          className="arrow"
          src={arrow}
          alt=""
          style={{
            transform: toggle ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </button>
      <div className={`display-content ${toggle ? "expanded" : "collapsed"}`}>
        {isArray ? (
          // Si le contenu est un tableau, afficher les éléments dans une liste.
          <ul className="list-style">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Si le contenu n'est pas un tableau, l'afficher tel quel.
          content
        )}
      </div>
    </>
  );
};

export default Collapse;
