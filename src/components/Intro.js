import React from "react";
import { Link } from "react-router-dom";

import ball from "../img/logo/pokeball contour fin.png";
import title from "../img/logo/LogoPoke.png";

import "./Intro.css";

const Intro = props => {
    return (
      <div>
        <img className="titre" src={title} alt="title" />
        <Link to="/new-game">
          <img
            className="pokeball"
            src={ball}
            alt="pokeball"
            onClick={props.makeVisible}
          />
        </Link>
      </div>
    );
}

export default Intro;
