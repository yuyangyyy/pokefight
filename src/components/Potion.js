import React from "react";

import "./Potion.css";

import fullPotion02 from "../img/potions/02_full_potion.png";

class Potion extends React.Component {
  render() {
    return (
      <div className="Potions" id={this.props.id} style={this.props.style}>
        <img src={fullPotion02} alt="" onClick={this.props.method} />
        <img src={fullPotion02} alt="" onClick={this.props.method} />
        <img src={fullPotion02} alt="" onClick={this.props.method} />
      </div>
    );
  }
}

export default Potion;
