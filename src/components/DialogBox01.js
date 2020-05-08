import React from "react";
import { Link } from "react-router-dom";

import "./DialogBox.css";

class DialogBox extends React.Component {

  state = { firstPlayer: "" };

  handleChange = (event) => {
    this.setState({ firstPlayer: event.target.value });
  }

  render() {
    return (
      <div className="box">
        <div className="DialogBox">
          <p>Welcome to the World of PokeFight !</p>
          <p>First, please enter your name :</p>
          <input
            type="text"
            value={this.state.firstPlayer}
            onChange={this.handleChange}
            placeholder=' Your Name'
          />
          <div className="button-group">
            <button style={this.state.firstPlayer !== '' ? { display: 'block' } : { display: 'none' }}>
              <Link to={{
                pathname: "/choose-pokemon",
                player1: this.state.firstPlayer
              }} >Confirm</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogBox;
