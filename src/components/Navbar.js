import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo/LogoPokeBlanc.png";
import pokeball from "../img/logo/Pokeball.png";

class Navbar extends React.Component {
  
  render() {
    return (
      <div className="header">
        <Link exact to="/" className='logo'><img className='nav-logo'src={logo}/></Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' htmlFor='menu-btn'><span className='nav-icon'></span></label>
        <ul className='menu'>
            <li id="orange"><Link to='/new-game'>New Game</Link></li>
            <li id='cyan'><Link to='/pokedex'>Pokédex</Link></li>
            <li id='green'><Link to='/ranking'>Ranking</Link></li>
            <li id='red'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
