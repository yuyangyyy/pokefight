import React from "react";
import "./AttackButton.css";

const AttackButton = (props) => {

  const {computerEnabled} = props

  return (
    <div id={props.id} className="mainContainer" style={props.style}>
        <button
          type="button"
          className="button"
          id="0"
          value={props.attackHit[0]}
          onClick={props.handleClickHit}
          disabled={computerEnabled ? true : false}
        >
          {props.attack[0]}
        </button>
        <button
          type="button"
          className="button"
          id="1"
          value={props.attackHit[1]}
          onClick={props.handleClickHit}
          disabled={computerEnabled ? true : false}
        >
          {props.attack[1]}
        </button>
        <button
          type="button"
          className="button"
          id="2"
          value={props.attackHit[2]}
          onClick={props.handleClickHit}
          disabled={computerEnabled ? true : false}
        >
          {props.attack[2]}
        </button>
        <button
          type="button"
          className="button"
          id="3"
          value={props.attackHit[3]}
          onClick={props.handleClickHit}
          disabled={computerEnabled ? true : false}
        >
          {props.attack[3]}
        </button>
    </div>
  );
};

export default AttackButton;
