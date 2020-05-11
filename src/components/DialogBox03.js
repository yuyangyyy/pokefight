import React from "react";
import { Link } from 'react-router-dom'
import "./DialogBox.css";


const DialogBox = (props) => {

  return (
    <div className="box">
      <div className="DialogBox" style={{ height: "150px" }}>
        <p>Enter your friend's name :</p>
        <input
          id="pseudoPlayer2"
          name="pseudoPlayer2"
          type="text"
          value={props.secondPlayer}
          onChange={props.saveNamePlayer2}
          placeholder="Player 2"
          required
        />
        <Link to={{ pathname: "/choose-pokemon" }}>
          <button style={props.secondPlayer !== '' ? { display: 'block' } : { display: 'none' }}>
            Confirm
          </button>
        </Link>
      </div>
    </div >
  );
}

export default DialogBox;
