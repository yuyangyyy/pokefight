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

const players = [
  { name: "Pikachu", number: "025", health: 100, healthColor: "rgb(100, 182, 75)", attack: ["Thunderbolt", "Slam", "Agility", "Thunder"], attackHit: [20, 10, 15, 30] },
  { name: "Raichu", number: "042", health: 100, healthColor: "rgb(100, 182, 75)", attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30] }
]

class Fight extends React.Component {
  state = {
    player1: players[0],
    player2: players[1],
    commentText: "",
  };

  //random damage TO DO
  //attackRandomHit = (max) => {
  // return Math.floor(Math.random() * Math.floor(max));
  //};


  //damage player 1 & 2
  handleClickHit = (e) => {
    const hit = e.target.value;
    const target = e.target.parentNode.id
    let localP = ""

    target === "attackP1" ? localP = this.state.player1 : localP = this.state.player2

    console.log(target, 'target')
    console.log(localP, 'LocalP')


    // if (hit > localP1.health) {
    //   this.setState({ player1: { health: 0 } });
    // } else {
    //   this.setState({ player1: { health: this.state.player1.health - hit } });
    // }
    // // //attack comment
    // this.setState({
    //   commentText: `${this.state.player2.name} used ${
    //     this.state.player2.attack[e.target.id]
    //     }`,
    // });

    // //damage comment
    // setTimeout(() => {
    //   hit > 20
    //     ? this.setState({ commentText: "Critical hit!" })
    //     : hit <= 20 && hit > 10
    //       ? this.setState({ commentText: "It's super effective!" })
    //       : hit <= 10 && hit > 0
    //         ? this.setState({ commentText: "It's effective!" })
    //         : this.setState({
    //           commentText: `${this.state.player2.name}'s attack missed!`,
    //         });
    // }, 1500);

    // this.endGameP2();
  };

  endGameP1 = () => {
    if (this.state.player1.health === 0) {
      this.setState({ commentText: `${this.player1.state.name} fainted!` });
    }
  };

  endGameP2 = () => {
    if (this.state.player2.health === 0) {
      this.setState({ commentText: `${this.state.player2.name} fainted!` });
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

  componentDidMount() {
    this.setState({ commentText: `Go ${this.state.player1.name}!` });
  }

  render() {
    return (
      <div className="fight">
        <div className="pic-stat1">
          <div className="stat">
            <StatutPokemon
              name={this.state.player2.name}
              number={this.state.player2.number}
              health={this.state.player2.health}
              healthColor={this.state.player2.healthColor}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png2} />
        </div>
        <div className="button-potion">
          <AttackButton
            id="attackP2"
            attackHit={this.state.player2.attackHit}
            attack={this.state.player2.attack}
            handleClickHit={this.handleClickHit}
          />
          <Potion method={this.handleClickPotion} />
        </div>
        <div className="pic-stat2">
          <div className="stat">
            <StatutPokemon
              name={this.state.player1.name}
              number={this.state.player1.number}
              health={this.state.player1.health}
              healthColor={this.state.player1.healthColor}
              ChangePvColor={this.changePvColor}
            />
          </div>
          <Picture pic={Png} />
        </div>
        <AttackButton
          id="attackP1"
          attackHit={this.state.player1.attackHit}
          attack={this.state.player1.attack}
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
