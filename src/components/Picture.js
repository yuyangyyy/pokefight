import React from "react";
import "./Picture.css";

import Png from "../img/pokemon/Png.png";

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: "" };
  }

  render() {
    return (
      <div className="picture">
        <img src={Png} alt="Pikachu" />
      </div>
    );
  }
}

export default Picture;
