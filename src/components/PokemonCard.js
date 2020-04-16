import React from 'react'
import './Pokedex.css'

class PokemonCard extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PokemonCard