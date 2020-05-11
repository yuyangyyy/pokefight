import React from "react";
import { Link } from "react-router-dom";

import "./DialogBox.css";

const DialogBox = (props) => {

  return (
    <div className="box">
      <div className="DialogBox">
        <p>Welcome to the World of PokeFight !</p>
        <p>First, please enter your name :</p>
        <input
          type="text"
          value={props.firstPlayer}
          onChange={props.saveNamePlayer1}
          placeholder=' Your Name'
        />
        <div className="button-group">
            <Link to={{
              pathname: "/choose-pokemon",
              player1: props.firstPlayer
            }}>
              <button style={props.firstPlayer !== '' ? { display: 'block' } : { display: 'none' }}>Confirm</button>
              </Link>
          
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
