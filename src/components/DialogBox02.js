import React from "react";
import { Link } from 'react-router-dom'

import "./DialogBox.css";

class DialogBox02 extends React.Component {

  render() {
    return (
      <div className="box">
        <div className="DialogBox" style={{ height: "100px" }}>
          <p>Who do you want to fight ?</p>
          <div className='button-group'>
            <div className='fake-button' style={{ backgroundColor: 'grey', color: 'white' }}>Computer</div>
            <button><Link to="/new-game-2">Local</Link></button>
          </div>
        </div>
      </div >
    );
  }
}

export default DialogBox02;
