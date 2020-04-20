import React from "react";
import "./StatutPokemon.css";

class StatutPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pikachu",
      number: "025",
      health: "",
    };
  }

  render() {
    return (
      <div className="statut">
        <div className="name">
          <p>{this.state.name}</p>
          <p>N.{this.state.number}</p>
        </div>
        <div className="pv">
          <p>PV</p>
          <div className="health"></div>
        </div>
      </div>
    );
  }
}

export default StatutPokemon;
