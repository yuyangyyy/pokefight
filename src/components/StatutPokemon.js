import React from "react";
import "./StatutPokemon.css";

class StatutPokemon extends React.Component {
  render() {
    // console.log(this.props.state.health, this.props.state.healthColor);
    return (
      <div className="statut">
        <div className="name">
          <p>{this.props.state.name}</p>
          <p>N.{this.props.state.number}</p>
        </div>
        <div className="pv">
          <p>PV</p>
          <div
            className="health"
            style={{
              width: `${this.props.state.health}%`,
              backgroundColor: ` ${this.props.state.healthColor}`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default StatutPokemon;
