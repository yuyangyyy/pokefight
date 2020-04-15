import React from 'react'
import './Potion.css'
import emptyPotion from '../img/potions/01_empty_potion.png'
import fullPotion from '../img/potions/01_full_potion.png'
import emptyPotion02 from '../img/potions/02_empty_potion.png'
import fullPotion02 from '../img/potions/02_full_potion.png'




class Potion extends React.Component {

    handleClick(e) {
        (e.target.src = emptyPotion)
    }
    handleClick02(e) {
        (e.target.src = emptyPotion02)
    }

    render() {
        return (
            <div>
            <div className="Potions">
                <img src={fullPotion} alt="" onClick={this.handleClick} />
                <img src={fullPotion} alt="" onClick={this.handleClick} />
                <img src={fullPotion} alt="" onClick={this.handleClick} />
            </div>

            <div className="Potions">
                <img src={fullPotion02} alt="" onClick={this.handleClick02} />
                <img src={fullPotion02} alt="" onClick={this.handleClick02} />
                <img src={fullPotion02} alt="" onClick={this.handleClick02} />
            </div>
            </div>
        )
    }
}

export default Potion