import React from "react";
import { Link } from "react-router-dom";

import "./DialogBox.css";

class DialogBox extends React.Component {

  componentDidMount() {
    this.props.refreshData();
  }
  render() {
    return (
      <div className="box">
        <div className="DialogBox">
          <p>Welcome to the World of PokeFight !</p>
          <p>First, please enter your name :</p>
          <input
            type="text"
            value={this.props.firstPlayer}
            onChange={this.props.saveNamePlayer1}
            placeholder=" Your Name"
          />
          <div className="button-group">
            <Link
              to={{
                pathname: "/choose-pokemon",
                player1: this.props.firstPlayer,
              }}
            >
              <button
                style={
                  this.props.firstPlayer !== ""
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogBox;
