import React from "react";
import "./StatutPokemon.css";

class StatutPokemon extends React.Component {
  render() {
    return (
      <div className="statut">
        <div className="name">
          <p>{this.props.name}</p>
          <p>N.{this.props.number}</p>
        </div>
        <div className="pv">
          <p>PV</p>
          <div
            className="health"
            style={{
              width: `${this.props.health}%`,
              backgroundColor: ` ${this.props.healthColor}`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default StatutPokemon;
