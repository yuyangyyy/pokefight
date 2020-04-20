import React from 'react'
import axios from 'axios'
import './Pokedex.css'

const propComparator = (propName) =>
  (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

class Pokedex extends React.Component {
    state = {
        nbPokemons: 105,
        pokemons: [],
        showMore: false,
        nbShow: 10
    }

    fetchPokemon = () => {
        for (let i = 1; i < this.state.nbPokemons; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`
            axios.get(url)
                .then(response => {  
                    let arrPokemons = [...this.state.pokemons, response.data]
                    this.setState({pokemons: arrPokemons}) 
                    console.log(i)
                    if(i === 9){
                        console.log(this.state.pokemons.sort(propComparator("id")))
                    }
                })
        }        
    }

    handleClick = () =>{
        this.setState({showMore: true})
        // let prevState = this.state.nbPokemons
        // this.setState({nbPokemons: prevState+=13})
        // this.fetchPokemon()
    }

    componentDidUpdate(prevState){
        // console.log(prevState.pok)
    }

    componentDidMount() {
        this.fetchPokemon()
    }

    render() {
        const { pokemons, showMore, nbShow } = this.state
        // const numberOfItems = showMore ? nbShow+=10 : 10
        if(showMore){
            let newNbShow = nbShow + 10
            this.setState({nbShow: newNbShow})
            this.setState({showMore: false})
        }
        return (
            <div>
                <div className="Pokedex">
                    
                    {pokemons && pokemons.slice(0, nbShow)
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