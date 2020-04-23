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
      attack1Hit: 0,
      attack2Hit: 10,
      attack3Hit: 15,
      attack4Hit: 30,
      commentText: "Go! Pikachu !",
    };
  }

  //random hit
  attackHit = (max) => {
    Math.floor(Math.random() * Math.floor(max));
  };

  //hit
  handleClickHit = (event) => {
    const hit = event.target.value;
    if (hit > this.state.health) {
      this.setState({ health: 0 });
      this.changePvColor();
    } else {
      this.setState({ health: this.state.health - hit });
      this.changePvColor();
    }

    //TO DO
    //this.setState({
    // commentText: `${this.state.name} used attackName`,
    //});

    hit > 20
      ? this.setState({ commentText: "Critical hit!" })
      : hit <= 20 && hit > 10
      ? this.setState({ commentText: "It's super effective!" })
      : hit <= 10 && hit > 0
      ? this.setState({ commentText: "It's effective!" })
      : this.setState({ commentText: `${this.state.name}'s attack missed!` });

    this.endGame();
  };

  endGame = () => {
    if (this.state.health === 0) {
      this.setState({ commentText: `${this.state.name} fainted!` });
    }
  };

  //TO DO
  //commentText="Enemy (PokemonName) used (AttackName)!"

  //recover

  handleClickPotion = (e) => {
    e.target.src === emptyPotion
      ? this.setState({ health: this.state.health })
      : this.state.health >= 80
      ? this.setState({ health: 100 })
      : this.setState({ health: this.state.health + 20 });

    e.target.src = emptyPotion;
    this.changePvColor();

    e.target.src === emptyPotion
      ? this.setState({ commentText: `${this.state.name} used RECOVER!` })
      : this.setState({ commentText: "It's empty..!" });
  };

  changePvColor = () => {
    this.state.health > 50
      ? this.setState({ healthColor: "rgb(100, 182, 75)" })
      : this.state.health <= 50 && this.state.health > 25
      ? this.setState({ healthColor: "orange" })
      : this.setState({ healthColor: "red" });
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
        <Comment commentText={this.state.commentText} />
      </div>
    );
  }
}

export default Fight;
