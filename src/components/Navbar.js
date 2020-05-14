import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo/LogoPokeBlanc.png";

import "./Navbar.css";

class Navbar extends React.Component {

  state={
    page: ''
  }
  getPageName = (event) => {
    this.setState({page: event.target.id})
  }

  render() {
    return (
      <div className="header" id='navbar' style={ this.props.appear ? {opacity: 1} : {opacity: 0}}>
        <Link to="/" className="logo">
          <img className="nav-logo" src={logo} alt="logo pokefight" />
        </Link>
    <p className='nav-reminder'>{this.state.page}</p>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu" onClick={this.getPageName}>
          <li id="orange">
            <Link to="/new-game" id="New Game">New Game</Link>
          </li>
          <li id="cyan">
            <Link to="/pokedex" id="Pokedex">Pokédex</Link>
          </li>
          <li id="green">
            <Link to="/ranking" id='Ranking'>Ranking</Link>
          </li>
          <li id="red">
            <Link to="/contact" id='Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
