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

import emptyPotion from "../img/potions/02_empty_potion.png";

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pikachu",
      number: "025",
      health: 100,
      healthColor: "rgb(100, 182, 75)",
      attack1: "Thunderbolt",
      attack2: "Slam",
      attack3: "Agility",
      attack4: "Thunder",
      attack1Hit: 10,
      attack2Hit: 15,
      attack3Hit: 25,
      attack4Hit: 30,
    };
  }

  //random hit
  attackHit = (max) => {
    Math.floor(Math.random() * Math.floor(max));
  };

  //hit
  handleClickHit = (event) => {
    // console.log(this.state.health, this.state.healthColor);

    const hit = event.target.value;
    if (hit > this.state.health) {
      this.setState({ health: 0 });
      this.changePvColor();
    } else {
      this.setState({ health: this.state.health - hit });
      this.changePvColor();
    }
  };
  //recover

  handleClickPotion = (e) => {
    if (e.target.src === emptyPotion) {
      this.setState({ health: this.state.health });
    } else if (this.state.health >= 80) {
      this.setState({ health: 100 });
    } else {
      this.setState({ health: this.state.health + 20 });
    }

    e.target.src = emptyPotion;
    this.changePvColor();
  };

  changePvColor = () => {
    //this.state.health > 40
    // ? this.setState({ healthColor: "rgb(100, 182, 75)" })
    // : this.state.health < 40 && this.state.health > 10
    //? this.setState({ healthColor: "orange" })
    //: this.setState({ healthColor: "red" });

    if (this.state.health > 50) {
      this.setState({ healthColor: "rgb(100, 182, 75)" });
    } else if (this.state.health <= 50 && this.state.health > 25) {
      this.setState({ healthColor: "orange" });
    } else {
      this.setState({ healthColor: "red" });
    }
  };

  render() {
    return (
      <div className="fight">
        <div className="pic-stat1">
          <div className="stat">
            <StatutPokemon
              state={this.state}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png2} />
        </div>
        <div className="pic-stat2">
          <div className="stat">
            <StatutPokemon
              state={this.state}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png} />
        </div>
        <AttackButton state={this.state} handleClickHit={this.handleClickHit} />
        <Potion method={this.handleClickPotion} />
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
