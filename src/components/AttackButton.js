import React from "react";
import "./AttackButton.css";

class AttackButton extends React.Component {
  render() {
    const { attack1, attack2, attack3, attack4 } = this.props.state;
    const { attack1Hit, attack2Hit, attack3Hit, attack4Hit } = this.props.state;
    const { handleClickHit } = this.props;
    return (
      <div className="mainContainer">
        <div className="container1">
          <button
            type="button"
            className="button"
            value={attack1Hit}
            onClick={handleClickHit}
          >
            {attack1}
          </button>
          <button
            type="button"
            className="button"
            value={attack2Hit}
            onClick={handleClickHit}
          >
            {attack2}
          </button>
        </div>
        <div className="container2">
          <button
            type="button"
            className="button"
            value={attack3Hit}
            onClick={handleClickHit}
          >
            {attack3}
          </button>
          <button
            type="button"
            className="button"
            value={attack4Hit}
            onClick={handleClickHit}
          >
            {attack4}
          </button>
        </div>
      </div>
    );
  }
}

export default AttackButton;
