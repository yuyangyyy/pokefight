import React from "react";
import { Redirect } from "react-router-dom";

import AttackButton from "./AttackButton";
import Comment from "./Comment";
import Potion from "./Potion";
import StatutPokemon from "./StatutPokemon";

import emptyPotion from "../img/potions/02_empty_potion.png";
import ko from "../img/logo/KO.png";
import song from "../soundtrack/fight-music.mp3";

import "./Fight.css";

class Fight extends React.Component {
  state = {
    player1: this.props.selectPlayer1[0],
    player2: this.props.selectPlayer2[0],
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
    computerEnabled: this.props.computerEnabled,
    computerPotion: 0,
    duration: 0,
    duration2: 0,
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  handleClickHit = (e) => {
    let hit;
    let hitId;
    let target;

    let playerState = "";
    let localP = "";
    let currentPlayer = "";
    let missedAttack = "";
    let totalHit = "";

    //Condition to assign hit or hitId if is a computer or player
    if (e.target !== undefined) {
      hit = parseInt(e.target.value);
      hitId = e.target.id;
      target = e.target.parentNode.id;
    } else {
      currentPlayer = this.state.player2;
      const randomHit = this.getRandomInt(3);
      hit = currentPlayer.attackHit[randomHit];
      hitId = randomHit;
    }

    //Condition to assign state to array according to player 1 or 2(and computer)
    if (target === "attackP1") {
      localP = this.state.player2;
      currentPlayer = this.state.player1;
      playerState = "player2";
      missedAttack = "missedAttackP1";
      totalHit = "totalHitP1";
      this.setState({ statAttackP1: this.state.statAttackP1 + 1 });
    } else {
      localP = this.state.player1;
      currentPlayer = this.state.player2;
      playerState = "player1";
      missedAttack = "missedAttackP2";
      totalHit = "totalHitP2";
      this.setState({ statAttackP2: this.state.statAttackP2 + 1 });
    }
    //life reducer
    const luckyHit = this.getRandomInt(10);
    if (luckyHit < 3) {
      hit = 0;
    } else if (luckyHit < 7) {
      hit = hit * 1;
    } else if (luckyHit < 9) {
      hit = Math.floor(hit * 1.25);
    } else {
      hit = Math.floor(hit * 1.5);
    }

    hit > localP.health ? (localP.health = 0) : (localP.health -= hit);

    //attack comment
    this.setState({
      commentText: `${currentPlayer.name} used ${currentPlayer.attack[hitId]}`,
    });
    //damage comment
    if (localP.health === 0 || currentPlayer.health === 0) {
      this.endGame(localP, currentPlayer, currentPlayer.attack[hitId]);
    } else {
      setTimeout(() => {
        hit > 35
          ? this.setState({ commentText: "Critical hit!" })
          : hit <= 35 && hit > 20
            ? this.setState({ commentText: "It's super effective!" })
            : hit <= 20 && hit >= 15
              ? this.setState({ commentText: "It's effective!" })
              : this.setState({
                commentText: `${currentPlayer.name}'s attack missed!`,
                [missedAttack]: this.state[missedAttack] + 1,
              });
      }, 2500);
    }

    this.setState(
      {
        [playerState]: localP,
        tourPlayer1: !this.state.tourPlayer1,
        [totalHit]: this.state[totalHit] + hit,
      },
      () => this.changePvColor(playerState)
    );

    //computer to false on his turn to avoid a own change
    if (e !== "computer")
      this.setState({ computerTurn: !this.state.computerTurn });
    else this.setState({ computerTurn: false });
  };

  endGame = (localP, currentPlayer, hit) => {
    if (currentPlayer.health === 0) {
      this.setState({
        commentText: `${currentPlayer.name} fainted after ${localP.name}'s ${hit} !`,
      });
    }
    if (localP.health === 0) {
      this.setState({
        commentText: `${localP.name} fainted after ${currentPlayer.name}'s ${hit} !`,
      });
    }
  };

  //recover
  handleClickPotion = (e) => {
    let playerState = "";
    let currentPlayer = "";
    const idPotionComputer = this.state.computerPotion;
    const potionImgComputer = document.getElementById("potionP2");

    let target = e.target === undefined ? "" : e.target.parentNode.id;
    let targetImg =
      e.target === undefined
        ? potionImgComputer.childNodes[idPotionComputer].src
        : e.target.src;

    if (target === "potionP1") {
      currentPlayer = this.state.player1;
      playerState = "player1";
    } else {
      currentPlayer = this.state.player2;
      playerState = "player2";
    }
    if (currentPlayer.health < 100 && currentPlayer.health > 0) {
      if (targetImg === emptyPotion) {
        currentPlayer.health *= currentPlayer.health;
        this.setState({ commentText: "It's empty..!" });
      } else if (currentPlayer.health >= 75) {
        currentPlayer.health = 100;
        this.setState({
          commentText: `${currentPlayer.name} used RECOVER!`,
          statPotion: this.state.statPotion + 1,
        });
      } else {
        currentPlayer.health += 25;
        this.setState({
          commentText: `${currentPlayer.name} used RECOVER!`,
          statPotion: this.state.statPotion + 1,
        });
      }

      if (targetImg !== emptyPotion) {
        this.setState(
          {
            [playerState]: currentPlayer,
            tourPlayer1: !this.state.tourPlayer1,
          },
          () => this.changePvColor(playerState)
        );

        if (e !== "computer") {
          this.setState({ computerTurn: !this.state.computerTurn });
          e.target.src = emptyPotion;
        } else {
          this.setState({
            computerTurn: false,
            computerPotion: idPotionComputer + 1,
          });
          potionImgComputer.childNodes[idPotionComputer].src = emptyPotion;
        }
      }
    }
  };
  // change PV barr color
  changePvColor = (player) => {
    let currentPlayer = this.state[player];

    if (currentPlayer.health > 50)
      currentPlayer.healthColor = "rgb(100, 182, 75)";
    else if (currentPlayer.health <= 50 && currentPlayer.health > 25)
      currentPlayer.healthColor = "yellow";
    else if (currentPlayer.health <= 25 && currentPlayer.health > 0)
      currentPlayer.healthColor = "red";
    else {
      currentPlayer.healthColor = "rgba(0, 0 , 0, 0)";
    }
    this.setState({ [player]: currentPlayer });
  };

  restoreHealth = () => {
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    player1.health = 100;
    player1.healthColor = "rgb(100, 182, 75)";
    player2.health = 100;
    player2.healthColor = "rgb(100, 182, 75)";

    this.setState({ player1: player1, player2: player2 });
  };

  getStats = () => {
    if (this.state.duration2 === 6) {
      return (
        <Redirect
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
            secondPlayer: this.props.secondPlayer,
            duration: this.state.duration,
          }}
        />
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const {computerTurn, tourPlayer1, computerEnabled} = this.state;

    if (
      computerEnabled &&
      computerTurn !== prevState.computerTurn &&
      tourPlayer1 !== prevState.tourPlayer1 &&
      this.state.player2.health > 0
    ) {
      setTimeout(() => {
        if (this.state.player2.health < 50 && this.state.computerPotion <= 1) {
          this.handleClickPotion("computer");
        } else this.handleClickHit("computer");
      }, 6000);

      this.setState({ tourPlayer1: false });
    }
  }

  componentDidMount() {
    this.setState({ commentText: `Go ${this.state.player1.name}!` }, () =>
      this.restoreHealth()
    );
    this.counter = setInterval(() => {
      if (this.state.player1.health > 0 && this.state.player2.health > 0) {
        this.setState({ duration: this.state.duration + 1 });
      }
    }, 1000);
    this.counter2 = setInterval(() => {
      if (this.state.player1.health === 0 || this.state.player2.health === 0) {
        this.setState({ duration2: this.state.duration2 + 1 });
      }
    }, 1000);
  }
  render() {
    let styleTurnP1 = this.state.tourPlayer1
      ? { display: "flex" }
      : { display: "none" };
    let styleTurnP2 = !this.state.tourPlayer1
      ? { display: "flex" }
      : { display: "none" };

    return (
      <>
        <div className="fight">
          <div className="fight-container">
            {/*PLAYER 1*/}
            <div className="fight-left">
              <StatutPokemon
                name={this.state.player1.name}
                number={this.state.player1.number}
                health={this.state.player1.health}
                healthColor={this.state.player1.healthColor}
                ChangePvColor={this.changePvColor}
              />
              <div className="ko-container">
                <img
                  id="ko-player1"
                  className="ko-player"
                  src={ko}
                  style={
                    this.state.player1.health === 0
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="KO"
                />
                <img
                  src={this.state.player1.sprite}
                  className="pokemon-sprite"
                  alt="pokemon-player1"
                />
              </div>
              <div className="turn-text" style={styleTurnP2}>
                <p>{this.props.secondPlayer || "Computer"}'s turn!</p>
              </div>
              <div className="actions-right">
                <Potion
                  id="potionP1"
                  method={this.handleClickPotion}
                  style={styleTurnP1}
                />
                <AttackButton
                  id="attackP1"
                  attackHit={this.state.player1.attackHit}
                  attack={this.state.player1.attack}
                  handleClickHit={this.handleClickHit}
                  style={styleTurnP1}
                />
              </div>
            </div>
            {/*PLAYER 2*/}
            <div className="fight-right">
              <StatutPokemon
                name={this.state.player2.name}
                number={this.state.player2.number}
                health={this.state.player2.health}
                healthColor={this.state.player2.healthColor}
                ChangePvColor={this.changePvColor}
              />
              <div className="ko-container">
                <img
                  id="ko-player2"
                  className="ko-player"
                  src={ko}
                  style={
                    this.state.player2.health === 0
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="KO"
                />
                <img
                  src={this.state.player2.sprite}
                  className="pokemon-sprite"
                  alt="pokemon-player2"
                />
              </div>
              <div className="turn-text" style={styleTurnP1}>
                <p>{this.props.firstPlayer}'s turn!</p>
              </div>
              <div className="actions-left">
                <Potion
                  id="potionP2"
                  method={this.handleClickPotion}
                  style={styleTurnP2}
                />
                <AttackButton
                  id="attackP2"
                  attackHit={this.state.player2.attackHit}
                  attack={this.state.player2.attack}
                  handleClickHit={this.handleClickHit}
                  style={styleTurnP2}
                  computerEnabled={this.state.computerEnabled}
                />
              </div>
            </div>
          </div>
          <div className="link">
            <Comment commentText={this.state.commentText} />
          </div>
          {this.getStats()}
        </div>
        <audio
          style={{ marginTop: "20px" }}
          src={song}
          controls
          autoPlay
        ></audio>
      </>
    );
  }
}

export default Fight;
