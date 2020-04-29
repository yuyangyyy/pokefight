import React from "react";
import { Link } from "react-router-dom";

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
  state = {
    name: "Pikachu",
    number: "025",
    health: 100,
    healthColor: "rgb(100, 182, 75)",
    attack: ["Thunderbolt", "Slam", "Agility", "Thunder"],
    attackHit: [20, 10, 15, 30],
    commentText: "Go! Pikachu !",
  };

  //random damage TO DO
  attackRandomHit = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  //damage
  handleClickHit = (e) => {
    const hit = e.target.value;
    if (hit > this.state.health) {
      this.setState({ health: 0 });
    } else {
      this.setState({ health: this.state.health - hit });
    }
    //attack comment
    this.setState({
      commentText: `${this.state.name} used ${this.state.attack[e.target.id]}`,
    });

    //damage comment
    setTimeout(() => {
      hit > 20
        ? this.setState({ commentText: "Critical hit!" })
        : hit <= 20 && hit > 10
        ? this.setState({ commentText: "It's super effective!" })
        : hit <= 10 && hit > 0
        ? this.setState({ commentText: "It's effective!" })
        : this.setState({
            commentText: `${this.state.name}'s attack missed!`,
          });
    }, 1500);

    this.endGame();
  };

  endGame = () => {
    if (this.state.health === 0) {
      this.setState({ commentText: `${this.state.name} fainted!` });
    }
  };

  //recover
  handleClickPotion = (e) => {
    e.target.src === emptyPotion
      ? this.setState({
          health: this.state.health,
          commentText: "It's empty..!",
        })
      : this.state.health >= 75
      ? this.setState({
          health: 100,
          commentText: `${this.state.name} used RECOVER!`,
        })
      : this.setState({
          health: this.state.health + 25,
          commentText: `${this.state.name} used RECOVER!`,
        });

    e.target.src = emptyPotion;
  };
  // change PV barr color
  changePvColor = () => {
    this.state.health > 50
      ? this.setState({ healthColor: "rgb(100, 182, 75)" })
      : this.state.health <= 50 && this.state.health > 25
      ? this.setState({ healthColor: "yellow" })
      : this.state.health <= 25 && this.state.health > 0
      ? this.setState({ healthColor: "orange" })
      : this.setState({ healthColor: "red" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.health !== prevState.health) {
      this.changePvColor();
    }
  }

  render() {
    return (
      <div className="fight">
        <div className="pic-stat1">
          <div className="stat">
            <StatutPokemon
              name={this.state.name}
              number={this.state.number}
              health={this.state.health}
              healthColor={this.state.healthColor}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png2} />
        </div>
        <div className="pic-stat2">
          <div className="stat">
            <StatutPokemon
              name={this.state.name}
              number={this.state.number}
              health={this.state.health}
              healthColor={this.state.healthColor}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png} />
        </div>
        <AttackButton
          attackHit={this.state.attackHit}
          attack={this.state.attack}
          handleClickHit={this.handleClickHit}
        />
        <Potion method={this.handleClickPotion} />
        <Link to="/new-game-7" className="link">
          <Comment commentText={this.state.commentText} />
        </Link>
      </div>
    );
  }
}

export default Fight;
