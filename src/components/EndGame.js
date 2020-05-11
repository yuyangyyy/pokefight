import React from 'react'

import StatBar from './StatBar'

import './EndGame.css'


class EndGame extends React.Component {

	state = {
		missAttack: 80,
		damage: 50
	}
	getPercentage = (val1, val2) => {
		if (val1 > 0 && val2 > 0) {
			return val1 / (val1 + val2) * 100
		}
		if (val1 === 0 && val2 === 0) {
			return 50
		}
	}

	render() {
		const { statPotion, statAttackP1, statAttackP2, missedAttackP1, missedAttackP2, totalHitP1, totalHitP2 } = this.props.location
		return (
			<div className="boxEndgame">
				<h3>Fight statistics :</h3>
				<div className="container-endgame">

					<div className="EndGame-line1">
						<p>{this.props.location.firstPlayer}</p>
						<p>VS</p>
						<p>{this.props.location.secondPlayer}</p>
					</div>

					<StatBar
						statData={this.getPercentage(statAttackP1, statAttackP2)}
						dataP1={statAttackP1}
						dataP2={statAttackP2}
						statName="Realized attacks"
					/>

					<StatBar
						statData={this.getPercentage(missedAttackP1, missedAttackP2)}
						dataP1={missedAttackP1}
						dataP2={missedAttackP2}
						statName="Missed attacks"
					/>

					<StatBar
						statData={this.getPercentage(totalHitP1, totalHitP2)}
						dataP1={totalHitP1}
						dataP2={totalHitP2}
						statName="Inflicted damages"
					/>

				</div>

				<div className="EndGame-stat-global">
					<p>Fight duration :</p>
					<p>Global attacks : {statAttackP1 - missedAttackP1 + statAttackP2 - missedAttackP2}</p>
					<p>Global damages : {totalHitP1 + totalHitP2}</p>
					<p>Global missed attacks : {missedAttackP1 + missedAttackP2}</p>
					<p>Global used potions : {statPotion}</p>
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