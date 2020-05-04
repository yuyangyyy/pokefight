import React from 'react'
import axios from 'axios'

import SortBox from './SortBox'
import ModalPokedex from './ModalPokedex'

import './Pokedex.css'
import logo from "../img/logo/Pokeball.png";

const propComparator = (propName) =>
	(a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class Pokedex extends React.Component {
	state = {
		selectPokemon: 0,
		nbPokemons: 12, //387
		pokemons: "",
		pokemonDescription: [],
		arrPokemonsType: [],
		showMore: false,
		nbShow: 12,

		pokemonSearch: "",
		pokemonsGene: "",
		pokemonsType: "",

		sortGene: false,
		sortType: false,
		displayModal: false
	}

	getPokemons = () => {
		console.log(this.state.nbPokemons)
		let arrPokemons = this.state.pokemons
		for (let i = 1 + (this.state.nbPokemons - 12); i <= this.state.nbPokemons; i++) {
			let url = `https://pokeapi.co/api/v2/pokemon/${i}`
			axios.get(url)
				.then(response => {
					arrPokemons = [...this.state.pokemons, response.data]
					this.setState({ pokemons: arrPokemons })
					this.state.pokemons.sort(propComparator("id"))
				})
		}
	}

	getPokemonsType = () => {
		axios.get("https://pokeapi.co/api/v2/type")
			.then(response => response.data.results.slice(0, 17))
			.then(data => {
				this.setState({ arrPokemonsType: data.map(type => type.name) })
			})
	}

	getPokemonDescription = (idPokemon) => {
		axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
			.then(response => response.data.flavor_text_entries.find(lang => lang.language.name === 'en'))
			.then(data => {
				console.log(data)
				this.setState({ pokemonDescription: data.flavor_text })
			})
	}

	choiceGeneration = (pokemon) => {
		const { pokemonsGene } = this.state
		return pokemonsGene === "1st Generation" ? pokemon.id <= 151 : pokemonsGene === "2nd Generation" ? pokemon.id >= 152 && pokemon.id <= 251 : pokemonsGene === "3rd Generation" ? pokemon.id >= 252 && pokemon.id <= 387 : pokemon.id
	}

	handleClickModal = (event) => {
		const pokemonName = event.target.parentNode.id

		const pokemonFind = this.state.pokemons.find(pokemon => pokemon.name === pokemonName)

		//If click on close modal
		if (pokemonFind != undefined) {
			this.setState({ selectPokemon: this.state.pokemons[pokemonFind.id - 1] })
			this.getPokemonDescription(pokemonFind.id)
		}

		//close modal
		event.target.className === 'close' ? this.setState({ displayModal: false, selectPokemon: 0 }) : this.setState({ displayModal: true })
		document.body.style.overflowY = this.state.displayModal ? "scroll" : "hidden"
	}

	handleClick = () => {
		this.setState({ showMore: true })
		this.setState({ nbPokemons: this.state.nbPokemons + 12, showMore: false }, () => this.getPokemons())
		console.log(this.state.nbShow)

	}

	handleChange = (event) => {
		const idName = event.target.id
		this.setState({ [idName]: event.target.value })
	}

	componentDidMount() {
		setTimeout(() => this.getPokemons(), 2000)
		this.getPokemonsType()
		this.getPokemonDescription()
	}

	render() {
		const arrPokemonGene = ["1st Generation", "2nd Generation", "3rd Generation"]
		const { nbPokemons, arrPokemonsType, pokemonsType, pokemons, pokemonSearch, pokemonsGene } = this.state
		const isSort = pokemonSearch !== "" || pokemonsType !== "" || pokemonsGene !== ""

		if (this.state.pokemons === "") {
			return (
				<div className="global-pokedex">
					<div className="filter-pokemon">
						<SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
						<SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
						<input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
					</div>
					<div className="loading-box">
						<img src={logo}/>
						{/* <div class="__pokeball">
							<div class="pokeball__button"></div>
						</div> */}
					</div>
				</div>
			)
		} else {
			return (
				<div className="global-pokedex">
					<ModalPokedex method={this.handleClickModal} pokemon={this.state.selectPokemon} pokemonDescription={this.state.pokemonDescription} displayModal={this.state.displayModal} />

					<div className="filter-pokemon">
						<SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
						<SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
						<input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
					</div>

					<div className="Pokedex">
						{pokemons && pokemons.slice(0, pokemonSearch !== "" || pokemonsType !== "" || pokemonsGene !== "" ? nbPokemons : 387)
							.filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonSearch.toLowerCase())) //search
							.filter(pokemon => this.choiceGeneration(pokemon)) //Sort Generation
							.filter(pokemon => pokemon.types[0].type.name.includes(pokemonsType) || pokemon.types[1] && pokemon.types[1].type.name.includes(pokemonsType)) //Sort Type
							.map((pokemon, id) => {
								let pokemonCard =
									<div className="pokemon-card" id={pokemon.name} key={id} data-numPokemon={id}>
										<img onClick={this.handleClickModal} src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
										<div className="pokemon-info">
											<h3>{pokemon.name}</h3>
											<p className={pokemon.types[0].type.name + " pokemon-type"}>{pokemon.types[0].type.name}</p>
											<p className={pokemon.types[1] && pokemon.types[1].type.name + " pokemon-type"}>{pokemon.types[1] && pokemon.types[1].type.name}</p>
										</div>
									</div>

								return pokemonCard
							})}

					</div>
					<div className="show-more">
						<button onClick={this.handleClick}>Show more...</button>
					</div>
				</div>
			)
		}
	}
}
export default Pokedex
