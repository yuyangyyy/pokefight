import React from "react";

import fullPotion02 from "../img/potions/02_full_potion.png";

import "./Potion.css";

const Potion = (props) => {
  return (
    <div className="Potions" id={props.id} style={props.style}>
      <img src={fullPotion02} alt="" onClick={props.method} />
      <img src={fullPotion02} alt="" onClick={props.method} />
    </div>
  );
};

export default Potion;
