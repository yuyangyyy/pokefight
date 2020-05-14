import React from "react";

import logo from "../img/logo/LogoPokeBlanc.png";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <img src={logo} alt="pokemon-logo" />
    </div>
  );
};

export default Landing;