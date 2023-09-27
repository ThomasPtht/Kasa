import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  const handClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-collapse">
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
      <div
        className="display-content"
        style={{
          display: toggle ? "block" : "none",
          transformOrigin: "top", // Pour centrer la transition à partir du haut
          transform: toggle ? "scaleY(1)" : "scaleY(0)", // Utilise scaleY pour l'effet d'échelle vertical
          transition: "transform 0.3s ease-in-out", // Même durée que pour la flèche
        }}
      >
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default Collapse;
