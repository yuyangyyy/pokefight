import React from 'react'
import './EndGame.css'
import StatBar from './StatBar'


class EndGame extends React.Component {


    state = {
        nbAttack: 20,
        missAttack: 80,
        damage: 50
    }

    render() {
        return (
            <div className="boxEndgame">
                <h3>Stats du combat :</h3>
                <div className="container-endgame">

                    <div className="EndGame-line1">
                        <p>Player 1</p>
                        <p>VS</p>
                        <p>Player 2</p>
                    </div>

                    <StatBar nbAttack={this.state.nbAttack} statName="Number of attack" className="EndGame-line2" />

                    <StatBar nbAttack={this.state.missAttack} statName="Miss attack" className="EndGame-line3" />

                    <StatBar nbAttack={this.state.damage} statName="Damage inflicted" className="EndGame-line4" />

                </div>

                <div className="EndGame-stat-global">
                    <p>Durée du combat :</p>
                    <p>Attaques totales :</p>
                    <p>Dégâts totaux :</p>
                </div>

                <div className="button-endgame">
                    <button>New Party</button>
                    <button>Revenge</button>
                </div>
            </div>


        )
    }
}

export default EndGame