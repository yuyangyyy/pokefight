import React from "react";
import "./AttackButton.css";

class AttackButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attack1: "Thunderbolt",
      attack2: "Slam",
      attack3: "Agility",
      attack4: "Thunder",
      attack1Hit: 20,
      attack2Hit: 15,
      attack3Hit: 25,
      attack4Hit: 30,
    };
  }
  //random attack hit method
  attackHit = (max) => {
    Math.floor(Math.random() * Math.floor(max));
  };
  //attack hit onClick method
  handleClick = (event) => {
    const hit = event.target.value;
    return console.log({ hit });
  };

  render() {
    const { attack1, attack2, attack3, attack4 } = this.state;
    const { attack1Hit, attack2Hit, attack3Hit, attack4Hit } = this.state;
    return (
      <div className="mainContainer">
        <div className="container1">
          <button
            type="button"
            className="button"
            value={attack1Hit}
            onClick={this.handleClick}
          >
            {attack1}
          </button>
          <button
            type="button"
            className="button"
            value={attack2Hit}
            onClick={this.handleClick}
          >
            {attack2}
          </button>
        </div>
        <div className="container2">
          <button
            type="button"
            className="button"
            value={attack3Hit}
            onClick={this.handleClick}
          >
            {attack3}
          </button>
          <button
            type="button"
            className="button"
            value={attack4Hit}
            onClick={this.handleClick}
          >
            {attack4}
          </button>
        </div>
      </div>
    );
  }
}

export default AttackButton;
