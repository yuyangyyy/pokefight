import React from "react";
import "./AttackButton.css";

class AttackButton extends React.Component {
  render() {
    const { handleClickHit } = this.props;
    return (
      <div className="mainContainer">
        <div className="container1">
          <button
            type="button"
            className="button"
            id="0"
            value={this.props.attackHit[0]}
            onClick={handleClickHit}
          >
            {this.props.attack[0]}
          </button>
          <button
            type="button"
            className="button"
            id="1"
            value={this.props.attackHit[1]}
            onClick={handleClickHit}
          >
            {this.props.attack[1]}
          </button>
        </div>
        <div className="container2">
          <button
            type="button"
            className="button"
            id="2"
            value={this.props.attackHit[2]}
            onClick={handleClickHit}
          >
            {this.props.attack[2]}
          </button>
          <button
            type="button"
            className="button"
            id="3"
            value={this.props.attackHit[3]}
            onClick={handleClickHit}
          >
            {this.props.attack[3]}
          </button>
        </div>
      </div>
    );
  }
}

export default AttackButton;
