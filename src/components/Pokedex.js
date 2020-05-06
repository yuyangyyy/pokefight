import React from 'react'
import axios from 'axios'

import SortBox from './SortBox'
import ModalPokedex from './ModalPokedex'

import logo from "../img/logo/Pokeball.png";

import './Pokedex.css'

const propComparator = (propName) =>
	(a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class Pokedex extends React.Component {
	state = {
		selectPokemon: 0,
		nbPokemons: 387, //387
		showMore: false,
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
		displayModal: false,
		isClick: false
	}

	getPokemons = () => {
		// for (let i = 1 + (nbToShow - 12); i <= nbToShow; i++) {
		for (let i = 0; i < this.state.nbPokemons; i++) {
			let url = `https://pokeapi.co/api/v2/pokemon/${i}`
			axios.get(url)
				.then(response => {
					this.setState({ pokemons: [...this.state.pokemons, response.data] })
					this.state.pokemons.sort(propComparator("id"))
				})
		}
	}

	getPokemonsType = () => {
		axios.get("https://pokeapi.co/api/v2/type")
			.then(response => response.data.results.slice(0, 18))
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
		if (pokemonFind !== undefined) {
			this.setState({ selectPokemon: this.state.pokemons[pokemonFind.id - 1] })
			this.getPokemonDescription(pokemonFind.id)
		}

		//close modal
		event.target.className === 'close' ? this.setState({ displayModal: false, selectPokemon: 0 }) : this.setState({ displayModal: true })
		document.body.style.overflowY = this.state.displayModal ? "scroll" : "hidden"
	}

	handleClick = () => {
		this.setState({ showMore: true })

	}

	handleChange = (event) => {
		const idName = event.target.id
		this.setState({ [idName]: event.target.value })
	}

	showPokedex() {
		document.getElementById('load').style.display = "none"
		document.getElementById('pokedex').style.display = "grid"
	}

	// getNbToShow = (pokemonSearch, pokemonsType, pokemonsGene) => {
	// 	if(pokemonSearch === "" || pokemonsType === "" || pokemonsGene === "")
	// 		return this.state.nbPokemons
	// 	else{
	// 		this.setState({showMax: true}, () => this.getPokemons())
	// 		this.setState({showMax: false})
	// 		return 387
	// 	}
	// }

	componentDidMount() {
		this.getPokemons()
		this.getPokemonsType()
		this.getPokemonDescription()
		setTimeout(() => this.showPokedex(), 1000)
	}

	render() {

		const arrPokemonGene = ["1st Generation", "2nd Generation", "3rd Generation"]
		const { nbShow, nbPokemons, arrPokemonsType, pokemonsType, pokemons, pokemonSearch, pokemonsGene } = this.state

		if (this.state.showMore)
			this.setState({ nbShow: nbShow + 12, showMore: false })

		// if (this.state.pokemons === "") {
		// 	return (
		// 		<div className="global-pokedex">
		// 			<div className="filter-pokemon">
		// 				<SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
		// 				<SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
		// 				<input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
		// 			</div>
		// 			<div className="loading-box">
		// 				<img src={logo}/>
		// 			</div>
		// 		</div>
		// 	)
		// } else {
		return (
			<div className="global-pokedex" >
				<ModalPokedex method={this.handleClickModal} pokemon={this.state.selectPokemon} pokemonDescription={this.state.pokemonDescription} displayModal={this.state.displayModal} />

				<div className="filter-pokemon" onClick={() => this.setState({ isClick: true })}>
					<SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
					<SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
					<input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
				</div>

				<div id="load" className="loading-box" style={{ display: "block" }}>
					<img src={logo} />
				</div>

				<div id="pokedex" className="Pokedex" style={{ display: "none" }}>
					{pokemons && pokemons.slice(0, pokemonSearch !== "" || pokemonsType !== "" || pokemonsGene !== "" ? nbPokemons : nbShow)
						.filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonSearch.toLowerCase())) //search
						.filter(pokemon => this.choiceGeneration(pokemon)) //Sort Generation
						.filter(pokemon => pokemon.types[0].type.name.includes(pokemonsType) || pokemon.types[1] && pokemon.types[1].type.name.includes(pokemonsType)) //Sort Type
						.map((pokemon, id) => {
							let pokemonCard =
								<div className="pokemon-card" id={pokemon.name} key={id}>
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
		// }
	}
}
export default Pokedex
