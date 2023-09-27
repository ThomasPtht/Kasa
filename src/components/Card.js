import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import { accommodationList } from "../datas/accommodationList";

const Card = () => {
  // state (état, données)

  // comportements

  // affichage (render  )
  return (
    <div className="contenair">
      {accommodationList.map((accommodation) => (
        <div className="box" key={accommodation.id}>
          <Link to={`/accommodation/${accommodation.id}`}>
            <img src={accommodation.cover} alt="{accommodation.title}" />
          </Link>
          <h2>{accommodation.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
