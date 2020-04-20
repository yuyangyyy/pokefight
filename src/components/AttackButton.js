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
    };
  }

  render() {
    const { attack1, attack2, attack3, attack4 } = this.state;
    return (
      <div className="mainContainer">
        <div className="container1">
          <button type="button" className="button">
            {attack1}
          </button>
          <button type="button" className="button">
            {attack2}
          </button>
        </div>
        <div className="container2">
          <button type="button" className="button">
            {attack3}
          </button>
          <button type="button" className="button">
            {attack4}
          </button>
        </div>
      </div>
    );
  }
}

export default AttackButton;
