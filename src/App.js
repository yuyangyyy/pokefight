import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DialogBox01 from "./components/DialogBox01";
import DialogBox02 from "./components/DialogBox02";
import DialogBox03 from "./components/DialogBox03";
import DialogBox04 from "./components/DialogBox04";
import DialogBox05 from "./components/DialogBox05";
import EndGame from "./components/EndGame";
import Fight from "./components/Fight";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Ranking from "./components/Ranking";
import Transition from './components/Transition';

import pkball from './img/logo/pokeball contour fin.png'

import "./App.css";

const propComparator = (propName) =>
  (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class App extends React.Component {

  state = {
    nbPokemons: 50, //387,
    pokemons: "",
    pokemonDescription: [],
    selectPokemon: 0,
    displayModal: false,
    selectPlayers: []
  }

  getPokemons = () => {
    for (let i = 0; i < this.state.nbPokemons; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`
      axios.get(url)
        .then(response => {
          this.setState({ pokemons: [...this.state.pokemons, response.data] })
          this.state.pokemons.sort(propComparator("id"))
        })
    }
  }

  getPokemonDescription = (idPokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
      .then(response => response.data.flavor_text_entries.find(lang => lang.language.name === 'en'))
      .then(data => {
        this.setState({ pokemonDescription: data.flavor_text })
      })
  }

  handleClickModal = (event) => {
    const pokemonName = event.target.parentNode.id

    const pokemonFind = this.state.pokemons.find(pokemon => pokemon.name === pokemonName)

    //If click on close modal
    if (pokemonFind !== undefined) {
      this.setState({ selectPokemon: this.state.pokemons[pokemonFind.id - 1] })
      this.getPokemonDescription(pokemonFind.id)
    }

    //close modal
    event.target.className === 'close' ? this.setState({ displayModal: false, selectPokemon: 0 }) : this.setState({ displayModal: true })
    document.body.style.overflowY = this.state.displayModal ? "scroll" : "hidden"
  }

  handleClickPlay = () => {
    document.body.style.overflowY = "scroll"
    const { selectPokemon } = this.state
    const idFormat = selectPokemon.id <= 9 ? "No.00" + selectPokemon.id : selectPokemon.id >= 10 && selectPokemon.id < 100 ? "No.0" + selectPokemon.id : "No." + selectPokemon.id
    const attacks = selectPokemon.moves.slice(0, 4).map(attack => attack.move.name)
    const players = [

      { name: selectPokemon.name, id: selectPokemon.id, number: idFormat, health: 100, attack: attacks, attackHit: [20, 10, 15, 30], sprite: selectPokemon.sprites.back_default },
      { name: "Raichu", number: "042", health: 100, attack: ["bolt", "Sla", "Agil", "Thun"], attackHit: [10, 20, 0, 30] }
    ]
    console.log(players)
    this.setState({ selectPlayers: players }, () => this.setState({ displayModal: false }))
  }

  componentDidMount() {
    this.getPokemons()
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/test'>
              <img class="pokeball-diag" src={pkball} />
              <DialogBox05 />
              <div className='pokedex-container'>
                <Pokedex
                  pokemons={this.state.pokemons}
                  selectPokemon={this.state.selectPokemon}
                  handleClickModal={this.handleClickModal}
                  pokemonDescription={this.state.pokemonDescription}
                  displayModal={this.state.displayModal}
                  handleClickPlay={this.handleClickPlay}
                  selectP1={this.state.selectP1} />
              </div>
            </Route>
            <Route exact path="/" component={Intro} />
            <Route path="/new-game">
              <div className="diag-pack">
                <img src={pkball} />
                <DialogBox01 />
              </div>
            </Route>
            <Route path="/new-game-1">
              <div className="diag-pack">
                <img src={pkball} />
                <DialogBox02 />
              </div>
            </Route>
            <Route path="/new-game-2">
              <div className="diag-pack">
                <img src={pkball} />
                <DialogBox04 />
              </div>
            </Route>
            <Route path="/new-game-3">
              <div className="diag-pack">
                <Link to="/new-game-4">
                  <img src={pkball} />
                </Link>
                <DialogBox02 />
              </div>
            </Route>
            <Route path='/new-game-4' component={Pokedex} />
            <Route path='/new-game-5'>
              <Transition selectPlayers={this.state.selectPlayers} />
            </Route>
            <Route path='/fight'>
              <Fight selectPlayers={this.state.selectPlayers} />
            </Route>
            <Route path='/new-game-7' component={EndGame} />
            <Route path="/pokedex">
              <Pokedex
                pokemons={this.state.pokemons}
                selectPokemon={this.state.selectPokemon}
                handleClickModal={this.handleClickModal}
                pokemonDescription={this.state.pokemonDescription}
                displayModal={this.state.displayModal}
                handleClickPlay={this.handleClickPlay}
                selectP1={this.state.selectP1} />
            </Route>
            <Route path="/ranking" component={Ranking} />
            <Route path="/contact" component={Form} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
