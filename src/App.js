import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DialogBox01 from "./components/DialogBox01";
import DialogBox02 from "./components/DialogBox02";
import DialogBox03 from "./components/DialogBox03";
import DialogBox04 from "./components/DialogBox04";
import EndGame from "./components/EndGame";
import Fight from "./components/Fight";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Intro from "./components/Intro";
import Landing from "./components/Landing"
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Ranking from "./components/Ranking";
import Transition from "./components/Transition";

import pkball from "./img/logo/pokeball contour fin.png";

import "./App.css";

const propComparator = (propName) => (a, b) =>
  a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

class App extends React.Component {
  state = {
    nbPokemons: 300,
    pokemons: "",
    frenchPokemons: [],
    pokemonDescription: [],
    selectPokemon: 0,
    displayModal: false,
    modalButton: true,
    appear: false,
    firstPlayer: "",
    secondPlayer: "",
    selectPlayer1: [],
    selectPlayer2: [],

    computerEnabled: false,
  };

  getPokemons = () => {
    for (let i = 0; i < this.state.nbPokemons; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      axios.get(url).then((response) => {
        this.setState({ pokemons: [...this.state.pokemons, response.data] });
        this.state.pokemons.sort(propComparator("id"));
      });
    }
  };

  getFrenchPokemons = () => {
    for (let i = 0; i < this.state.nbPokemons; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then((response) => {
          const dataPokemon = {
            name: response.data.names[6].name,
            id: response.data.id,
          };
          this.setState({
            frenchPokemons: [...this.state.frenchPokemons, dataPokemon],
          });
          this.state.frenchPokemons.sort(propComparator("id"));
        });
    }
  };

  getPokemonDescription = (idPokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
      .then((response) =>
        response.data.flavor_text_entries.find(
          (lang) => lang.language.name === "en"
        )
      )
      .then((data) => {
        this.setState({ pokemonDescription: data.flavor_text });
      });
  };

  makeVisible = () => {
    this.setState({ appear: true });
  };

  saveNamePlayer1 = (event) => {
    if (event.target.value.length <= 7) {
      this.setState({ firstPlayer: event.target.value });
    }
  };

  saveNamePlayer2 = (event) => {
    if (event.target.value.length <= 7) {
      this.setState({ secondPlayer: event.target.value });
    }
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  getRandomHit = (max) => {
    const hit = Math.floor(Math.random() * Math.floor(max));
    return hit >= 15 ? hit : 15;
  };

  handleClickModal = (event) => {
    let pokemonName;
    event.target.id === "randomPokemon"
      ? (pokemonName = this.state.pokemons[
          this.getRandomInt(this.state.nbPokemons - 1)
        ].name)
      : (pokemonName = event.target.parentNode.id);

    const pokemonFind = this.state.pokemons.find(
      (pokemon) => pokemon.name === pokemonName
    );

    //If click on close modal
    if (pokemonFind !== undefined) {
      this.setState({ selectPokemon: this.state.pokemons[pokemonFind.id - 1] });
      this.getPokemonDescription(pokemonFind.id);
    }

    //close modal
    event.target.className === "close"
      ? this.setState({ displayModal: false, selectPokemon: 0 })
      : this.setState({ displayModal: true });
    document.body.style.overflowY = this.state.displayModal
      ? "scroll"
      : "hidden";
  };

  handleClickPlay = () => {
    document.body.style.overflowY = "scroll";
    const { selectPokemon } = this.state;
    const idFormat =
      selectPokemon.id <= 9
        ? "No.00" + selectPokemon.id
        : selectPokemon.id >= 10 && selectPokemon.id < 100
        ? "No.0" + selectPokemon.id
        : "No." + selectPokemon.id;
    const random = this.getRandomInt(selectPokemon.moves.length - 5);
    const attacks = selectPokemon.moves
      .slice(random, random + 4)
      .map((attack) => attack.move.name);

    const players = [
      {
        name: selectPokemon.name,
        type: selectPokemon.types[0].type.name,
        id: selectPokemon.id,
        number: idFormat,
        health: 100,
        attack: attacks,
        attackHit: [
          this.getRandomHit(35),
          this.getRandomHit(35),
          this.getRandomHit(35),
          this.getRandomHit(35),
        ],
        sprite: selectPokemon.sprites.back_default,
      },
    ];

    if (this.state.selectPlayer1.length === 0) {
      this.setState({ selectPlayer1: players }, () => {
        this.setState({ displayModal: false });
      });
    } else {
      players[0].sprite = selectPokemon.sprites.front_default;
      this.setState({ selectPlayer2: players }, () => {
        this.setState({ displayModal: false });
      });
    }
  };

  handleClickEnemy = (e) => {
    e.target.id === "computer"
      ? this.setState({ computerEnabled: true })
      : this.setState({ computerEnabled: false });
  };

  refreshData = () => {
    this.setState({
      firstPlayer: "",
      secondPlayer: "",
      selectPlayer1: [],
      selectPlayer2: [],
    });
  };

  componentDidMount() {
    this.getPokemons();
    this.getFrenchPokemons();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar appear={this.state.appear} />
          <Switch>
            <Route path="/choose-pokemon">
              <img className="pokeball-diag" src={pkball} alt="pokeball logo" />
              <DialogBox04 />
              <div className="pokedex-container">
                <Pokedex
                  pokemons={this.state.pokemons}
                  frenchPokemons={this.state.frenchPokemons}
                  selectPokemon={this.state.selectPokemon}
                  handleClickModal={this.handleClickModal}
                  pokemonDescription={this.state.pokemonDescription}
                  displayModal={this.state.displayModal}
                  handleClickPlay={this.handleClickPlay}
                  selectPlayer1={this.state.selectPlayer1}
                  modalButton={this.state.modalButton}
                />
              </div>
            </Route>
            <Route exact path="/">
              <Intro makeVisible={this.makeVisible} />
            </Route>
            <Route path='/landing' component={Landing} />
            <Route path="/new-game">
              <div className="diag-pack" alt="pokeball logo" >
                <img src={pkball} alt="pokeball logo" />
                <DialogBox01
                  firstPlayer={this.state.firstPlayer}
                  saveNamePlayer1={this.saveNamePlayer1}
                  refreshData={this.refreshData}
                />
              </div>
            </Route>
            <Route path="/new-game-1">
              <div className="diag-pack">
                <img src={pkball} alt="pokeball logo" />
                <DialogBox02 handleClickEnemy={this.handleClickEnemy} />
              </div>
            </Route>
            <Route path="/new-game-2">
              <div className="diag-pack">
                <img src={pkball} alt="pokeball logo" />
                <DialogBox03
                  secondPlayer={this.state.secondPlayer}
                  saveNamePlayer2={this.saveNamePlayer2}
                />
              </div>
            </Route>
            <Route path="/new-game-3">
              <div className="diag-pack">
                <Link to="/new-game-4">
                  <img src={pkball} alt="pokeball logo" />
                </Link>
                <DialogBox02 />
              </div>
            </Route>
            <Route path="/new-game-4" component={Pokedex} />
            <Route path="/new-game-5">
              <Transition
                selectPlayer1={this.state.selectPlayer1}
                selectPlayer2={this.state.selectPlayer2}
              />
            </Route>
            <Route path="/fight">
              <Fight
                selectPlayer1={this.state.selectPlayer1}
                selectPlayer2={this.state.selectPlayer2}
                firstPlayer={this.state.firstPlayer}
                secondPlayer={this.state.secondPlayer}
                computerEnabled={this.state.computerEnabled}
              />
            </Route>
            <Route path="/new-game-7" component={EndGame} />
            <Route path="/pokedex">
              <Pokedex
                pokemons={this.state.pokemons}
                frenchPokemons={this.state.frenchPokemons}
                selectPokemon={this.state.selectPokemon}
                handleClickModal={this.handleClickModal}
                pokemonDescription={this.state.pokemonDescription}
                displayModal={this.state.displayModal}
                handleClickPlay={this.handleClickPlay}
                selectPlayer1={this.state.selectPlayer1}
              />
            </Route>
            <Route path="/ranking" component={Ranking} />
            <Route path="/contact" component={Form} />
          </Switch>
          <Footer appear={this.state.appear} />
        </div>
      </Router>
    );
  }
}

export default App;
