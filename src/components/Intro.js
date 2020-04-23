import React from "react";
import title from "../img/logo/LogoPoke.png";
import ball from "../img/logo/pokeball contour fin.png";
import "./Intro.css";
import {Link} from "react-router-dom"

class Intro extends React.Component {
  render() {
    return (
      <div>
        <img className="titre" src={title} alt="title" />
        <Link to='/new-game'><img className="pokeball" src={ball} alt="pokeball" onClick={this.props.makeVisible} /></Link>
      </div>
    );
  }
}

export default Intro;
