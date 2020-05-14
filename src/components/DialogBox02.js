import React from "react";
import { Link } from "react-router-dom";

import "./DialogBox.css";

const DialogBox02 = (props) => {
  return (
    <div className="box">
      <div className="DialogBox" style={{ height: "100px" }}>
        <p>Who do you want to fight ?</p>
        <div className="button-group">
          <Link to="/choose-pokemon">
            <button id="computer" onClick={props.handleClickEnemy}>
              Computer
            </button>
          </Link>
          <Link to="/new-game-2">
            <button id="local" onClick={props.handleClickEnemy}>
              Local
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DialogBox02;
