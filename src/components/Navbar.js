import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../img/logo/LogoPokeBlanc.png";

class Navbar extends React.Component {
  state = { isOpen: false };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className={this.state.isOpen ? "navbar isOpen" : "navbar"}>
        <div className="sousnavbar">
          <div className="navlogo">
            <div
              onClick={this.toggleNavbar}
              className={this.state.isOpen ? "burger active" : "burger"}
            >
              <div className="spanbar">
                <span></span>
              </div>
            </div>
            <Link to="/">
              <img src={logo} alt="logoPokemon" />
            </Link>
          </div>

          <div className="links">
            <ul>
              <li className="new-game">
                <Link to="/new-game">New game</Link>
              </li>

              <li className="pokedex">
                <Link to="/pokedex">PokéDex</Link>
              </li>

              <li className="classement">
                <Link to='/ranking'>Ranking</Link>
              </li>

              <li className="contact">
                <Link to='contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
