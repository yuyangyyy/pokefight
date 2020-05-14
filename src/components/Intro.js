import React from "react";
import { Link } from "react-router-dom";

import ball from "../img/logo/pokeball contour fin.png";
import title from "../img/logo/LogoPoke.png";

import "./Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <img className="titre" src={title} alt="title" />
        <Link to="/new-game">
          <img
            className="pokeball"
            src={ball}
            alt="pokeball"
            onClick={this.props.makeVisible}
          />
        </Link>
      </div>
    );
  }
}

export default Intro;
