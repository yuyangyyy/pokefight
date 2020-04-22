import React from "react";
import "./Potion.css";

import fullPotion02 from "../img/potions/02_full_potion.png";

class Potion extends React.Component {
  render() {
    return (
      <div>
        <div className="Potions">
          <img src={fullPotion02} alt="" onClick={this.props.method} />
          <img src={fullPotion02} alt="" onClick={this.props.method} />
          <img src={fullPotion02} alt="" onClick={this.props.method} />
        </div>
      </div>
    );
  }
}

export default Potion;
