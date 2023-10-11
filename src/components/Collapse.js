import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  const handClick = () => {
    setToggle(!toggle);
  };

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
          <ul className="list-style">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </>
  );
};

export default Collapse;
