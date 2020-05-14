import React from "react";
import axios from "axios";

import ModalPokedex from "./ModalPokedex";
import SortBox from "./SortBox";

import logo from "../img/logo/Pokeball.png";

import "./Pokedex.css";
import "./Types.css";

class Pokedex extends React.Component {
  state = {
    arrPokemonsType: [],
    showMore: false,
    nbShow: 12,
    pokemonSearch: "",
    pokemonsGene: "",
    pokemonsType: "",
    sortGene: false,
    sortType: false,
    isClick: false,
  };

  getPokemonsType = () => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => response.data.results.slice(0, 17))
      .then((data) => {
        this.setState({ arrPokemonsType: data.map((type) => type.name) });
      });
  };

  choiceGeneration = (pokemon) => {
    const { pokemonsGene } = this.state;
    return pokemonsGene === "1st Generation"
      ? pokemon.id <= 151
      : pokemonsGene === "2nd Generation"
      ? pokemon.id >= 152 && pokemon.id <= 251
      : pokemonsGene === "3rd Generation"
      ? pokemon.id >= 252 && pokemon.id <= 387
      : pokemon.id;
  };

  handleClick = () => {
    this.setState({ showMore: true });
  };

  handleChange = (event) => {
    const idName = event.target.id;
    this.setState({ [idName]: event.target.value });
  };

  showPokedex() {
    document.getElementById("load").style.display = "none";
    document.getElementById("pokedex").style.display = "grid";
  }

  componentDidMount() {
    this.getPokemonsType();
    setTimeout(() => this.showPokedex(), 1000);
  }

  render() {
    const arrPokemonGene = [
      "1st Generation",
      "2nd Generation",
      "3rd Generation",
    ];
    const {
      nbShow,
      nbPokemons,
      arrPokemonsType,
      pokemonsType,
      pokemonSearch,
      pokemonsGene,
    } = this.state;
    const { pokemons, frenchPokemons } = this.props;

    if (this.state.showMore)
      this.setState({ nbShow: nbShow + 12, showMore: false });

    return (
      <div className="global-pokedex">
        <ModalPokedex
          method={this.props.handleClickModal}
          pokemon={this.props.selectPokemon}
          pokemonDescription={this.props.pokemonDescription}
          displayModal={this.props.displayModal}
          handleClickPlay={this.props.handleClickPlay}
          selectPlayer1={this.props.selectPlayer1}
          modalButton={this.props.modalButton}
        />

        <div
          className="filter-pokemon"
          onClick={() => this.setState({ isClick: true })}
        >
          <button id="randomPokemon" onClick={this.props.handleClickModal}>
            Random
          </button>
          <SortBox
            method={this.handleChange}
            id="pokemonsGene"
            sortTitle="Sort by Generation"
            sortType={arrPokemonGene}
            sortBoxSize="200px"
          />
          <SortBox
            method={this.handleChange}
            id="pokemonsType"
            sortTitle="Sort by Type"
            sortType={arrPokemonsType}
            sortBoxSize="160px"
          />
          <input
            id="pokemonSearch"
            type="search"
            onChange={this.handleChange}
            value={pokemonSearch}
            placeholder="  Search by Name (EN)"
          />
        </div>

        <div id="load" className="loading-box" style={{ display: "block" }}>
          <img src={logo} />
        </div>

        <div id="pokedex" className="Pokedex" style={{ display: "none" }}>
          {pokemons &&
            pokemons
              .slice(
                0,
                pokemonSearch !== "" ||
                  pokemonsType !== "" ||
                  pokemonsGene !== ""
                  ? nbPokemons
                  : nbShow
              )
              .filter((pokemon, id) =>
                pokemon.name.startsWith(pokemonSearch.toLowerCase())
              ) //search
              .filter((pokemon) => this.choiceGeneration(pokemon)) //Sort Generation
              .filter(
                (pokemon) =>
                  pokemon.types[0].type.name.includes(pokemonsType) ||
                  (pokemon.types[1] &&
                    pokemon.types[1].type.name.includes(pokemonsType))
              ) //Sort Type
              .map((pokemon, id) => {
                let pokemonCard = (
                  <div className="pokemon-card" id={pokemon.name} key={id}>
                    <img
                      onClick={this.props.handleClickModal}
                      src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                      alt=""
                    />
                    <div className="pokemon-info">
                      <h3>{pokemon.name}</h3>
                      <p
                        className={pokemon.types[0].type.name + " pokemon-type"}
                      >
                        {pokemon.types[0].type.name}
                      </p>
                      <p
                        className={
                          pokemon.types[1] &&
                          pokemon.types[1].type.name + " pokemon-type"
                        }
                      >
                        {pokemon.types[1] && pokemon.types[1].type.name}
                      </p>
                    </div>
                  </div>
                );

                return pokemonCard;
              })}
        </div>
        <div className="show-more">
          <button onClick={this.handleClick}>Show more...</button>
        </div>
      </div>
    );
  }
}
export default Pokedex;
