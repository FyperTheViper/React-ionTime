import React from "react";
import "./sol.css";

const SolCards = props => (
  <div className="body-card" onClick={() => props.clickedPicture(props.id)}>
      <img className="planet-pics" alt={props.name} src={props.photo} />
      <p className="planet-text">
          {props.name}
      </p>
  </div>
);

export default SolCards;