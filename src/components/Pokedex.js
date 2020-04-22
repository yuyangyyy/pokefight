import React from 'react'
import axios from 'axios'
import './Pokedex.css'
import SortBox from './SortBox'
import ModalPokedex from './ModalPokedex'

const propComparator = (propName) =>
    (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectPokemon: 0,
            nbPokemons: 102, //387
            pokemons: [],
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
        this.handleChange = this.handleChange.bind(this)
    }

    getPokemons = () => {
        for (let i = 1; i < this.state.nbPokemons; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`
            axios.get(url)
                .then(response => {
                    let arrPokemons = [...this.state.pokemons, response.data]
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

    getPokemonDescription = (idPokemon) =>{
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
                .then(response => response.data.flavor_text_entries[1].flavor_text)
                .then(data =>{
                    console.log(data)
                    this.setState({pokemonDescription: data})
                    })
            
    }

    handleClickModal = (event) => {
        const numPokemon = event.target.parentNode.dataset.numpokemon
        this.setState({ selectPokemon: this.state.pokemons[numPokemon] })

        this.getPokemonDescription(numPokemon)

        //click on close modal
        event.target.className === 'close' ? this.setState({ displayModal: false, selectPokemon: 0  }) : this.setState({ displayModal: true })
        document.body.style.overflowY = this.state.displayModal ? "scroll" : "hidden"
    }

    handleClick = () => {
        this.setState({ showMore: true })
    }

    handleChange = (event) => {
        const idName = event.target.id
        this.setState({ [idName]: event.target.value })

    }

    componentDidMount() {
        this.getPokemons()
        this.getPokemonsType()
        this.getPokemonDescription()
    }

    componentDidUpdate() {

    }

    render() {
        // console.log(this.state.pokemonsDescription)
        const arrPokemonGene = ["1st Generation", "2nd Generation", "3rd Generation"]
        const { nbPokemons, arrPokemonsType, pokemonsType, pokemons, showMore, nbShow, pokemonSearch, pokemonsGene } = this.state
        if (showMore)
            this.setState({ nbShow: nbShow + 12, showMore: false })
        return (
            <div>
                <ModalPokedex method={this.handleClickModal} pokemon={this.state.selectPokemon} pokemonDescription = {this.state.pokemonDescription}displayModal={this.state.displayModal} />

                <div className="filter-pokemon">
                    <SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
                    <SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
                    <input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
                </div>
                <div className="Pokedex">
                    {pokemons && pokemons.slice(0, pokemonSearch !== "" || pokemonsType !== "" || pokemonsGene !== "" ? nbPokemons : nbShow)
                        .filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonSearch.toLowerCase())) //search
                        .filter(pokemon => pokemonsGene === "1st Generation" ? pokemon.id <= 151 : pokemonsGene === "2nd Generation" ? pokemon.id >= 152 && pokemon.id <= 251 : pokemonsGene === "3rd Generation" ? pokemon.id >= 252 && pokemon.id <= 387 : pokemon) //Sort Generation
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

export default Pokedex 