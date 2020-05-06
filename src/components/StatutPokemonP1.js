import React from "react";

import "./StatutPokemon.css";

const StatutPokemonP1 = (props) => {
  return (
    <div className="statut">
      <div className="name">
        <p>{props.name}</p>
        <p>N.{props.number}</p>
      </div>
      <div className="pv">
        <p>PV</p>
        <div
          className="health"
          style={{
            width: `${props.health}%`,
            backgroundColor: ` ${props.healthColor}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatutPokemonP1;
