import React from "react";

import "./EndGame.css";

const StatBar = (props) => {
  return (
    <div className="StatusBar">
      <div className="myProgress">
        <div style={{ width: props.statData + "%" }} className="myBar1"></div>
      </div>
      <p>{props.dataP1}</p>
      <p className="stat-name"> {props.statName} </p>
      <p>{props.dataP2}</p>
      <div className="myProgress">
        <div
          style={{ width: 100 - props.statData + "%" }}
          className="myBar2"
        ></div>
      </div>
    </div>
  );
};

export default StatBar;
