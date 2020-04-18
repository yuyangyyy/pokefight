import React from "react";
import "./Navbar.css";
import logo from "../img/logo/LogoPokeBlanc.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DialogBox from "./DialogBox";
import Form from "./Form";
import Potion from "./Potion";
import Ranking from "./Ranking";

function Navbar() {
  return (
    <Router>
      <div className="page-container">
        <div className="navbar">
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
        <Switch>
          <Route exact path="/" />
          <Route exact path="/new-game" component={DialogBox} />
          <Route exact path="/pokedex" component={Potion} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/contact" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
