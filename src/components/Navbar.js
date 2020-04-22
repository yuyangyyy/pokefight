import React from "react";
import "./Navbar.css";
import logo from "../img/logo/LogoPokeBlanc.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="sousnavbar">
        <div className="navlogo">
          <div className="burger">
            <span></span>
          </div>
          <img src={logo} alt="logoPokemon" />
        </div>

        <div className="links">
          <ul>
            <li className="new-game">
              <a href="#Nouvellepartie">New game</a>
            </li>

            <li className="pokedex">
              <a href="#PokéDex">PokéDex</a>
            </li>

            <li className="classement">
              <a href="#Classement">Ranking</a>
            </li>

            <li className="contact">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
