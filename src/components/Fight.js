import React from "react";

import AttackButton from "./AttackButton";
import Comment from "./Comment";
import Potion from "./Potion";
import Picture from "./Picture";
import StatutPokemon from "./StatutPokemon";

import "./Fight.css";

//pics for ex
import Png from "../img/pokemon/Png.png";
import Png2 from "../img/pokemon/Png2.png";

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pikachu",
      number: "025",
      health: "",
      attack1: "Thunderbolt",
      attack2: "Slam",
      attack3: "Agility",
      attack4: "Thunder",
      attack1Hit: 20,
      attack2Hit: 15,
      attack3Hit: 25,
      attack4Hit: 30,
    };
  }

  //random attack hit method
  attackHit = (max) => {
    Math.floor(Math.random() * Math.floor(max));
  };

  //attack hit onClick method
  handleClickHit = (event) => {
    const hit = event.target.value;
    return { hit };
  };

  render() {
    return (
      <div className="fight">
        <div className="pic-stat1">
          <div className="stat">
            <StatutPokemon state={this.state} />
          </div>
          <Picture pic={Png2} />
        </div>
        <div className="pic-stat2">
          <div className="stat">
            <StatutPokemon state={this.state} />
          </div>
          <Picture pic={Png} />
        </div>
        <AttackButton state={this.state} handleClickHit={this.handleClickHit} />
        <Potion />
        <Comment commentText="Go! Pikachu !" />
        <Comment commentText="(PokemonName) used (AttackName)!" />
        <Comment commentText="Enemy (PokemonName) used (AttackName)!" />
        <Comment commentText="It's super effective!" />
        <Comment commentText="Critical hit!" />
        <Comment commentText="(PokemonName)'s attack missed!" />
        <Comment commentText="(PokemonName) used RECOVER!" />
        <Comment commentText="(PokemonName) regained health!" />
        <Comment commentText="(PokemonName) fainted!" />
      </div>
    );
  }
}

export default Fight;
