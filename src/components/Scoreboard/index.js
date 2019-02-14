import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="score-container">
      <div className="row justify-content-center">
        <h2>Score: {props.score}</h2>
        <h2>High Score: {props.topScore}</h2>
      </div>
      <div className="row justify-content-center">
      <h5 className="description">Click on a planet or moon, but try not to click the same one twice!</h5>
      </div>
    </div>
  );

export default Scoreboard;