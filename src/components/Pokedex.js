import React from 'react'
import axios from 'axios'
import './Pokedex.css'

class Pokedex extends React.Component {
    state = {
    }

    fetchPokemon = () => {
        const arrPokemons = []
        const arrPokemonsFr = []
        const nbPokemons = 20
        for (let i = 1; i <= nbPokemons; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => {
                    arrPokemons.push(response.data)
                    //On définie la state seulement quand on a pushé toutes les données dans le tableau 
                    if (i === nbPokemons - 1) {
                        this.setState({ pokemons: arrPokemons })
                    }
                })
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
                .then(response => {
                    arrPokemonsFr.push(response.data)
                    //On définie la state seulement quand on a pushé toutes les données dans le tableau 
                    this.setState({ pokemonsFr: arrPokemonsFr })
                })
        }
    }

    componentDidMount() {
        this.fetchPokemon()
    }

    render() {
        const { pokemons, pokemonsFr } = this.state
        return (

            <div className="Pokedex">
                {pokemons && pokemons.map((pokemon, id) => {

                    let pokemonCard =
                        <div className="pokemon-card">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
                            <div className="pokemon-info">
                                <h3>{pokemon.name}</h3> 
                                <p className={pokemon.types[0].type.name + " pokemon-type"}>{pokemon.types[0].type.name}</p>
                                <p className={pokemon.types[1] && pokemon.types[1].type.name + " pokemon-type"}>{pokemon.types[1] && pokemon.types[1].type.name}</p>
                            </div>
                        </div>;

                    return pokemonCard
                })}
            </div>
        )
    }
}

export default Pokedex