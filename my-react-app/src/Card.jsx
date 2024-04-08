import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
