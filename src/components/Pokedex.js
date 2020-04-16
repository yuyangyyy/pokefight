import React from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import './Pokedex.css'

class Pokedex extends React.Component {
    state = {
    }

    fecthPokemon = () => {
        const arrPokemons = []
        const nbPokemons = 300
        for (let i = 1; i < nbPokemons; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => {
                    arrPokemons.push(response.data)
                    //On définie la state seulement quand on a pushé toutes les données dans le tableau 
                    if (i === nbPokemons-1) {
                        this.setState({ pokemons: arrPokemons })
                    }
                })
        }
    }

    componentDidMount() {
        this.fecthPokemon()
    }

    render() {
        const { pokemons } = this.state
        return (

            <div className="Pokedex">

                {pokemons && pokemons.map(pokemon => {
                    return <div className="pokemon-card">
                        <img src={pokemon.sprites.front_default} alt=""/>
                        <p>{pokemon.name}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default Pokedex