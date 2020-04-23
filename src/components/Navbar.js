import React from "react";
import "./Navbar.css";
import logo from "../img/logo/LogoPokeBlanc.png";
import pokeball from "../img/logo/pokeball_contour_fin.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

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
                <img
                  id="pokeballnavbar"
                  src={pokeball}
                  alt="pokeball_contour_fin"
                />
              </div>
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
}

export default Navbar;
