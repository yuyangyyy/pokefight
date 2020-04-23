import React from "react";
import "./Navbar.css";
import Footer from './Footer'
import logo from "../img/logo/LogoPokeBlanc.png";
import {Link} from "react-router-dom";



function Navbar(props) {
  return (
    <div className="page-container" >
      <div className="navbar" style={{visibility: props.style}}>
        <div className="sousnavbar">
          <Link to="/">
            <img className="navlogo" src={logo} alt="logoPokemon" />
          </Link>

          <div className="links">
            <ul>
              <li className="new-game">
                <Link to="/new-game">New Game</Link>
              </li>

              <li className="pokedex">
                <Link to="/pokedex">Pokedex</Link>
              </li>

              <li className="classement">
                <Link to="/ranking">Ranking</Link>
              </li>

              <li className="contact">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;
