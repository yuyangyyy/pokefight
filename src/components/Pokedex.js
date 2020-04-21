import React from 'react'
import axios from 'axios'
import './Pokedex.css'
import SortBox from './SortBox'

const propComparator = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbPokemons: 387,
            pokemons: [],
            arrPokemonsType: [],
            showMore: false,
            nbShow: 12,
            pokemonSearch: "",
            pokemonsGene: "",
            pokemonsType: "",
            sortGene: false,
            sortType: false
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


    handleClick = () => {
        this.setState({ showMore: true })
    }
   
    handleChange = (event) => {
        const idName = event.target.id
        console.log(idName)
        this.setState({[idName]: event.target.value}) 
        
    }

    componentDidMount() {
        this.getPokemons()
        this.getPokemonsType()
    }

    componentDidUpdate() {

    }

    render() {
        const arrPokemonGene =["1st Generation", "2nd Generation", "3rd Generation"]

        const { nbPokemons, arrPokemonsType, pokemonsType, pokemons, showMore, nbShow, pokemonSearch, pokemonsGene } = this.state
        if (showMore)
            this.setState({ nbShow: nbShow + 12, showMore: false })
        return (
            <div>
                <div className="filter-pokemon">
                    <SortBox method={this.handleChange} id="pokemonsGene" sortTitle="Sort by Generation" sortType={arrPokemonGene} sortBoxSize="200px" />
                    <SortBox method={this.handleChange} id="pokemonsType" sortTitle="Sort by Type" sortType={arrPokemonsType} sortBoxSize="160px" />
                    <input id="pokemonSearch" type="search" onChange={this.handleChange} value={pokemonSearch} placeholder="  Search by Name (EN or FR)" />
                </div>
                <div className="Pokedex">
                    {pokemons && pokemons.slice(0, pokemonSearch !== "" || pokemonsType !== "" || pokemonsGene !== "" ? nbPokemons : nbShow)
                        .filter(pokemon => pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase())) //search
                        .filter(pokemon => pokemonsGene === "1st Generation" ? pokemon.id <= 151 : pokemonsGene === "2nd Generation" ? pokemon.id >= 152 && pokemon.id <= 251 : pokemonsGene === "3rd Generation" ? pokemon.id >= 252 && pokemon.id <= 387 : pokemon) //Sort Generation
                        .filter(pokemon => pokemon.types[0].type.name.includes(pokemonsType) || pokemon.types[1] &&pokemon.types[1].type.name.includes(pokemonsType)) //Sort Type
                        .map((pokemon, id) => {
                            let pokemonCard =
                                <div className="pokemon-card" key={id}>
                                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
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