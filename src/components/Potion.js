import React from 'react'
import './Potion.css'

import emptyPotion from '../img/potions/02_empty_potion.png'
import fullPotion02 from '../img/potions/02_full_potion.png'




class Potion extends React.Component {

    handleClick(e) {
        (e.target.src = emptyPotion)
    }

    render() {
        return (
            <div>
            <div className="Potions">
                <img src={fullPotion02} alt="" onClick={this.handleClick} />
                <img src={fullPotion02} alt="" onClick={this.handleClick} />
                <img src={fullPotion02} alt="" onClick={this.handleClick} />
            </div>
            </div>
        )
    }
}

export default Potion