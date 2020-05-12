import React from "react";
import { Link } from "react-router-dom";



import AttackButton from "./AttackButton";
import Comment from "./Comment";
import Potion from "./Potion";
import StatutPokemon from "./StatutPokemon";


import "./Fight.css";

import emptyPotion from "../img/potions/02_empty_potion.png";


const players = [
  { name: "Pikachu", number: "025", health: 100, healthColor: "rgb(100, 182, 75)", attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30], sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" },
  { name: "Raichu", number: "042", health: 100, healthColor: "rgb(100, 182, 75)", attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' }
]


class Fight extends React.Component {
  state = {
    player1: this.props.selectPlayer1[0], //this.props.selectPlayer1[0],
    player2: this.props.selectPlayer2[0], //this.props.selectPlayer2[0],
    commentText: "",
    tourPlayer1: true,

    statPotion: 0,
    statAttackP1: 0,
    statAttackP2: 0,
    missedAttackP1: 0,
    missedAttackP2: 0,
    totalHitP1: 0,
    totalHitP2: 0,

    computerTurn: false,
    computerEnabled: false,
    computerPotion: 0
  };

  //random damage TO DO
  //attackRandomHit = (max) => {
  // return Math.floor(Math.random() * Math.floor(max));
  //};


  //damage player 1 & 2

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClickHit = (e) => {

    let hit
    let hitId
    let target



    let playerState = ""
    let localP = ""
    let currentPlayer = ''
    let missedAttack = ''
    let totalHit = ''

    //Condition to assign hit or hitId if is a computer or player
    if (e.target !== undefined) {
      hit = parseInt(e.target.value);
      hitId = e.target.id
      target = e.target.parentNode.id
    } else {
      currentPlayer = this.state.player2
      const randomHit = this.getRandomInt(3)
      hit = currentPlayer.attackHit[randomHit]
      hitId = randomHit
    }

    //Condition to assign state to array according to player 1 or 2(and computer)
    if (target === "attackP1") {
      localP = this.state.player2
      currentPlayer = this.state.player1
      playerState = "player2"
      missedAttack = "missedAttackP1"
      totalHit = 'totalHitP1'
      this.setState({ statAttackP1: this.state.statAttackP1 + 1 })

    } else {
      localP = this.state.player1
      currentPlayer = this.state.player2
      playerState = "player1"
      missedAttack = "missedAttackP2"
      totalHit = 'totalHitP2'
      this.setState({ statAttackP2: this.state.statAttackP2 + 1 })

    }
    //life reducer
    hit > localP.health ? localP.health = 0 : localP.health -= hit

    //attack comment
    this.setState({
      commentText: `${currentPlayer.name} used ${
        currentPlayer.attack[hitId]
        }`,
    });

    //damage comment
    if (localP.health === 0 || currentPlayer.health === 0) {
      this.endGame(localP, currentPlayer, currentPlayer.attack[hitId]);
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
                [missedAttack]: this.state[missedAttack] + 1
              });
      }, 1000);
    }

    // const newComputer = !this.state.computer

    this.setState({
      [playerState]: localP,
      tourPlayer1: !this.state.tourPlayer1,
      [totalHit]: this.state[totalHit] + hit,
    })

    //on force computer à false lors de son tour poue éviter qu'il change lui même
    if (e !== "computer")
      this.setState({ computerTurn: !this.state.computerTurn })
    else
      this.setState({ computerTurn: false })


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
    const idPotionComputer = this.state.computerPotion
    const potionImgComputer = document.getElementById('potionP2')

    let target = e.target == undefined ? "" : e.target.parentNode.id
    let targetImg = e.target === undefined ? potionImgComputer.childNodes[idPotionComputer].src : e.target.src

    if (target === "potionP1") {
      currentPlayer = this.state.player1
      playerState = "player1"
    } else {
      currentPlayer = this.state.player2
      playerState = "player2"
    }
    if (currentPlayer.health < 100 && currentPlayer.health > 0) {
      if (targetImg === emptyPotion) {
        currentPlayer.health = currentPlayer.health
        this.setState({ commentText: "It's empty..!" })
      } else if (currentPlayer.health >= 75) {
        currentPlayer.health = 100
        this.setState({ commentText: `${currentPlayer.name} used RECOVER!`, statPotion: this.state.statPotion + 1 })
      } else {
        currentPlayer.health += 25
        this.setState({ commentText: `${currentPlayer.name} used RECOVER!`, statPotion: this.state.statPotion + 1 })
      }

      if (targetImg !== emptyPotion) {
        this.setState({
          [playerState]: currentPlayer,
          tourPlayer1: !this.state.tourPlayer1
        })

        if (e !== "computer") {
          this.setState({ computerTurn: !this.state.computerTurn })
          e.target.src = emptyPotion
        }
        else {
          this.setState({ computerTurn: false, computerPotion: idPotionComputer + 1 })
          potionImgComputer.childNodes[idPotionComputer].src = emptyPotion
        }
      }
    }
  };
  // change PV barr color
  changePvColor = () => {
    this.state.player1.health > 50
      ? this.setState({ healthColor: "rgb(100, 182, 75)" })
      : this.state.player1.health <= 50 && this.state.player1.health > 25
        ? this.setState({ healthColor: "yellow" })
        : this.state.player1.health <= 25 && this.state.player1.health > 0
          ? this.setState({ healthColor: "orange" })
          : this.setState({ healthColor: "red" });
  };

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.player1.health !== prevState.player1.health) {
    //   this.changePvColor();
    // }
    const { computerTurn, tourPlayer1, computerEnabled } = this.state
    if (computerEnabled && computerTurn !== prevState.computerTurn && tourPlayer1 !== prevState.tourPlayer1) {

      setTimeout(() => {
        if (this.state.player2.health < 50 && this.state.computerPotion <= 2) {
          this.handleClickPotion('computer')
        }
        else
          this.handleClickHit('computer')
      }, 1000)

      this.setState({ tourPlayer1: false })
    }
  }

  componentDidMount() {
    this.setState({ commentText: `Go ${this.state.player1.name}!` });
  }

  render() {
    console.log("render...")

    let styleTurnP1 = this.state.tourPlayer1 ? { display: 'flex' } : { display: 'none' }
    let styleTurnP2 = !this.state.tourPlayer1 ? { display: 'flex' } : { display: 'none' }
    return (
      <div className="fight">
        <div className='fight-container'>
          {/*PLAYER 1*/}
          <div className='fight-left'>
            <StatutPokemon
              name={this.state.player1.name}
              number={this.state.player1.number}
              health={this.state.player1.health}
              healthColor={this.state.player1.healthColor}
              ChangePvColor={this.changePvColor}
            />
            <div className='zoom-left' style={{ background: `url(${this.state.player1.sprite}) no-repeat center -20px`, backgroundSize: "200px" }}>
              <div className="space"></div>
              <div className="turn-text" style={styleTurnP2}>
                <p>{this.props.secondPlayer}'s turn!</p>
              </div>
              <AttackButton
                id="attackP1"
                attackHit={this.state.player1.attackHit}
                attack={this.state.player1.attack}
                handleClickHit={this.handleClickHit}
                style={styleTurnP1}
              />
            </div>
            <Potion
              id="potionP1"
              method={this.handleClickPotion}
              style={styleTurnP1}
            />
          </div>
          {/*PLAYER 2*/}
          <div className='fight-right'>
            <StatutPokemon
              name={this.state.player2.name}
              number={this.state.player2.number}
              health={this.state.player2.health}
              healthColor={this.state.player2.healthColor}
              ChangePvColor={this.changePvColor}
            />

            <div className='zoom-right' style={{ background: `url(${this.state.player2.sprite}) no-repeat center -20px`, backgroundSize: "200px" }}>
              <div className="space"></div>
              <div className="turn-text" style={styleTurnP1}>
                <p>{this.props.firstPlayer}'s turn!</p>
              </div>
              <AttackButton
                id="attackP2"
                attackHit={this.state.player2.attackHit}
                attack={this.state.player2.attack}
                handleClickHit={this.handleClickHit}
                style={styleTurnP2}
              />
            </div>
            <Potion
              id="potionP2"
              method={this.handleClickPotion}
              style={styleTurnP2} />
          </div>
        </div>
        <Link
          to={{
            pathname: "/new-game-7",
            statPotion: this.state.statPotion,
            statAttackP1: this.state.statAttackP1,
            statAttackP2: this.state.statAttackP2,
            missedAttackP1: this.state.missedAttackP1,
            missedAttackP2: this.state.missedAttackP2,
            totalHitP1: this.state.totalHitP1,
            totalHitP2: this.state.totalHitP2,
            firstPlayer: this.props.firstPlayer,
            secondPlayer: this.props.secondPlayer
          }}
          className="link">
          <Comment commentText={this.state.commentText} />
        </Link>
      </div>
    );
  }
}

export default Fight;
