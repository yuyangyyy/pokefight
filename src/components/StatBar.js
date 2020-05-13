import React from 'react'

import "./EndGame.css"

class StatBar extends React.Component {

	render() {
		console.log(this.props.statData, (100-this.props.statData))
		return (
			<div className="StatusBar">
				<div className="myProgress">
					<div style={{ width: this.props.statData + "%" }} className="myBar1"></div>
				</div>
				<p>{this.props.dataP1}</p>
				<p className="stat-name">  {this.props.statName} </p>
				<p>{this.props.dataP2}</p>
				<div className="myProgress">
					<div style={{ width: 100 - this.props.statData + "%" }} className="myBar2"></div>
				</div>
			</div>

		)
	}
}

export default StatBar