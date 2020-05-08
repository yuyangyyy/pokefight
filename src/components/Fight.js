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
import Png2 from '../img/pokemon/Png2.png';


import emptyPotion from "../img/potions/02_empty_potion.png";


const players = [
  { name: "Pikachu", number: "025", health: 100, attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30], sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" },
  { name: "Raichu", number: "042", health: 100, attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' }
]


class Fight extends React.Component {
  state = {
    player1: players[0], //this.props.selectPlayer1[0],
    player2: players[1], //this.props.selectPlayer2[0],
    commentText: "",
    healthColor: "rgb(100, 182, 75)"
  };

  //random damage TO DO
  //attackRandomHit = (max) => {
  // return Math.floor(Math.random() * Math.floor(max));
  //};


  //damage player 1 & 2
  handleClickHit = (e) => {
    const hit = e.target.value;
    const target = e.target.parentNode.id
    let playerState = ""
    let localP = ""
    let currentPlayer = ''

    if (target === "attackP1") {
      localP = this.state.player2
      currentPlayer = this.state.player1
      playerState = "player2"
    } else {
      localP = this.state.player1
      currentPlayer = this.state.player2
      playerState = "player1"
    }
    console.log(currentPlayer)
    //life reducer
    hit > localP.health ? localP.health = 0 : localP.health -= hit

    //attack comment
    this.setState({
      commentText: `${currentPlayer.name} used ${
        currentPlayer.attack[e.target.id]
        }`,
    });

    //damage comment
    if (localP.health === 0 || currentPlayer.health === 0) {
      this.endGame(localP, currentPlayer, currentPlayer.attack[e.target.id]);
    } else {
      setTimeout(() => {
        hit > 20
          ? this.setState({ commentText: "Critical hit!" })
          : hit <= 20 && hit > 10
            ? this.setState({ commentText: "It's super effective!" })
            : hit <= 10 && hit > 0
              ? this.setState({ commentText: "It's effective!" })
              : this.setState({
                commentText: `${currentPlayer.name}'s attack missed!`,
              });
      }, 1000);
    }

    this.setState({ [playerState]: localP })

  };

  endGame = (localP, currentPlayer, hit) => {
    if (currentPlayer.health === 0) {
      this.setState({ commentText: `${currentPlayer.name} fainted after ${localP.name}'s ${hit} !` });
    }
    if (localP.health === 0) {
      this.setState({ commentText: `${localP.name} fainted after ${currentPlayer.name}'s ${hit} !` })
    }

  };

  //recover
  handleClickPotion = (e) => {
    let playerState = ""
    let currentPlayer = ''
    let target = e.target.parentNode.id


    if (target === "potionP1") {
      currentPlayer = this.state.player1
      playerState = "player1"
    } else {
      currentPlayer = this.state.player2
      playerState = "player2"
    }
    if (currentPlayer.health < 100 && currentPlayer.health > 0) {
      if (e.target.src === emptyPotion) {
        currentPlayer.health = currentPlayer.health
        this.setState({ commentText: "It's empty..!" })
      } else if (currentPlayer.health >= 75) {
        currentPlayer.health = 100
        this.setState({ commentText: `${currentPlayer.name} used RECOVER!` })
      } else {
        currentPlayer.health += 25
        this.setState({ commentText: `${currentPlayer.name} used RECOVER!` })
      }
      e.target.src = emptyPotion;
    }
    this.setState({ [playerState]: currentPlayer })

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
        <div className='fight-container'>
          <div className='fight-left'>
            <StatutPokemon
              name={this.state.player1.name}
              number={this.state.player1.number}
              health={this.state.player1.health}
              healthColor={this.state.player1.healthColor}
              ChangePvColor={this.changePvColor}
            />
            <div className='zoom-left' style={{background: `url(${this.state.player1.sprite}) no-repeat center -20px`, backgroundSize: "200px"}}>
              <div className="space"></div>
              <AttackButton
                id="attackP1"
                attackHit={this.state.player1.attackHit}
                attack={this.state.player1.attack}
                handleClickHit={this.handleClickHit}
              />
            </div>
            {/* <img className="sprite-image" src={this.state.player1.sprite} alt="" /> */}

            <Potion
              id="potionP1"
              method={this.handleClickPotion}
            />
          </div>
          <div className='fight-right'>
            <StatutPokemon
              name={this.state.player2.name}
              number={this.state.player2.number}
              health={this.state.player2.health}
              healthColor={this.state.player2.healthColor}
              ChangePvColor={this.changePvColor}
            />
            {/* <img className="sprite-image" src={this.state.player2.sprite} alt="" /> */}
            <div className='zoom-right' style={{background: `url(${this.state.player2.sprite}) no-repeat center -20px`, backgroundSize: "200px"}}>
              <div className="space"></div>
              <AttackButton
                id="attackP1"
                attackHit={this.state.player2.attackHit}
                attack={this.state.player2.attack}
                handleClickHit={this.handleClickHit}
              />
            </div>
            <Potion
              id="potionP2"
              method={this.handleClickPotion} />
          </div>
        </div>
        <Link to="/new-game-7" className="link">
          <Comment commentText={this.state.commentText} />
        </Link>
      </div>
    );
  }
}

export default Fight;
