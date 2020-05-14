import React from 'react'

import StatBar from './StatBar'
import { Link, Redirect } from "react-router-dom";

import './EndGame.css'
import vs from "../img/logo/versus.png"


class EndGame extends React.Component {

	state = {
		missAttack: 80,
		damage: 50
	}
	getPercentage = (val1, val2) => {

		if (val1 === 0 && val2 === 0) {
			return 50
		} else if (val1 === 0) {
			return 0
		} else if (val2 === 0) {
			return 100
		} else {
			return val1 / (val1 + val2) * 100
		}
	}

	convertDuration = (duration) => {
		if (duration > 59 && duration < 120) {
			return `1m${duration - 60}`
		} else if (duration >= 120 && duration < 180) {
			return `2m${duration - 120}`
		} else if (duration >= 180 && duration < 240) {
			return `3m${duration - 180}`
		} else if (duration >= 240 && duration < 300) {
			return `4m${duration - 240}`
		}else if (duration >= 300 && duration < 360) {
			return `5m${duration - 300}`
		}else if (duration >= 360 && duration < 720) {
			return `6m${duration - 360}`
		}else {
			return duration
		}

	}	

	refreshPage = () => {
		return <Redirect to='/new-game' />
	}

	render() {
		const { statPotion, statAttackP1, statAttackP2, missedAttackP1, missedAttackP2, totalHitP1, totalHitP2 } = this.props.location
		return (
			<div className="boxEndgame">
				<div className="container-endgame">

					<div className="EndGame-line1">
						<p>{this.props.location.firstPlayer}</p>
						<img src={vs} alt='vs-logo' style={{ width: '75px' }} />
						<p>{this.props.location.secondPlayer || "Computer" }</p>
					</div>

					<StatBar
						statData={this.getPercentage(statAttackP1, statAttackP2)}
						dataP1={statAttackP1}
						dataP2={statAttackP2}
						statName="Inflicted attacks"
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
					<p>Fight duration : {this.convertDuration(this.props.location.duration)}s</p>
					<p>Global attacks : {statAttackP1 - missedAttackP1 + statAttackP2 - missedAttackP2}</p>
					<p>Global damages : {totalHitP1 + totalHitP2}</p>
					<p>Global missed attacks : {missedAttackP1 + missedAttackP2}</p>
					<p>Global used potions : {statPotion}</p>
				</div>

				<div className="button-endgame">

					<Link to='/new-game'><button>New Game</button></Link>

					<Link to="/fight">
						<button>Revenge</button>
					</Link>
				</div>
			</div>


		)
	}
}

export default EndGame