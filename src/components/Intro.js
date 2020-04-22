import React from "react";
import title from "../img/logo/LogoPoke.png";
import ball from "../img/logo/Pokeball.png";
import "./Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <img className="titre" src={title} alt="title" />
        <img className="pokeball" src={ball} alt="pokeball" onClick={this.props.makeVisible} />
      </div>
    );
  }
}

export default Intro;
