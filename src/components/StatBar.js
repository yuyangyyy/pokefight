import React from 'react'

import "./EndGame.css"

class StatBar extends React.Component {

	render() {
		return (
			<div className={this.props.className}>
				<div className="myProgress">
					<div style={{ width: this.props.nbAttack + "%" }} className="myBar1"></div>
				</div>
				<p className="stat-name">  {this.props.statName} </p>
				<div className="myProgress">
					<div style={{ width: 100 - this.props.nbAttack + "%" }} className="myBar2"></div>
				</div>
			</div>

		)
	}
}

export default StatBar