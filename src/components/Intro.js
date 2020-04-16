import React from 'react'
import title from '../3. images/Poketitre.png'
import ball from '../3. images/Pokeball.png'
import './Intro.css'

const Intro = () =>{
    return (
        <div>
            <img className='titre' src={title} alt="title"/>
            <img className='pokeball' src={ball} alt='pokeball'/>
        </div>
    )
}

export default Intro