import React from "react";
import "./AttackButton.css";

const AttackButtonP2 = (props) => {
  console.log(props);
  return (
    <div className="mainContainer">
      <div className="container1">
        <button
          type="button"
          className="button"
          id="0"
          value={props.attackHit[0]}
          onClick={props.handleClickHit}
        >
          {props.attack[0]}
        </button>
        <button
          type="button"
          className="button"
          id="1"
          value={props.attackHit[1]}
          onClick={props.handleClickHit}
        >
          {props.attack[1]}
        </button>
      </div>
      <div className="container2">
        <button
          type="button"
          className="button"
          id="2"
          value={props.attackHit[2]}
          onClick={props.handleClickHit}
        >
          {props.attack[2]}
        </button>
        <button
          type="button"
          className="button"
          id="3"
          value={props.attackHit[3]}
          onClick={props.handleClickHit}
        >
          {props.attack[3]}
        </button>
      </div>
    </div>
  );
};

export default AttackButtonP2;
