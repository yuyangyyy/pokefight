import React from "react"
import { Link } from 'react-router-dom'

import './ModalPokedex.css'

class ModalPokedex extends React.Component {
	state = {
		test: false
	}
	render() {
		let isDisplay = this.props.displayModal ? "block" : "none"
		const { pokemon } = this.props
		const attacks = pokemon && pokemon.moves.slice(0, 4).map(attack => attack.move.name)
		const weakness = ['Fire', 'Flight', 'Psy', 'Ice']
		const firstType = pokemon && pokemon.types[0].type.name
		const scdType = pokemon && pokemon.types[1] ? pokemon.types[1].type.name : ""
		return (
			<div className="ModalPokedex" style={{ display: isDisplay }}>
				<div className="modal">
					<div className="modal-content">
						<span onClick={this.props.method} className="close">&times;</span>
						<h3>{pokemon.name}<span> {pokemon.id <= 9 ? "No.00" + pokemon.id : pokemon.id >= 10 && pokemon.id < 100 ? "No.0" + pokemon.id : "No." + pokemon.id}</span></h3>
						<Link to={this.props.selectPlayer1.length > 0 ? '/new-game-5' : '/new-game-1'}>
							<button id="play" onClick={this.props.handleClickPlay}>Play</button>
						</Link>
						<div className="modal-container">
							<img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={`pokemon${pokemon.id}`} />
							<div>
								<p>{this.props.pokemonDescription}</p>
								<div className="stats-container">
									<h4>Type : <span>{firstType} {scdType && scdType}</span></h4>
									<div className="simple-data">
										<h4>Size : <span>{pokemon.height / 10} m</span></h4>
										<h4>Weight : <span>{pokemon.weight / 10} kg</span></h4>
									</div>
									<div className="usual-attacks">
										<h4>Usual attacks :</h4>
										<ul>
											{attacks && attacks.map((attack, id) => <li>{id === 3 ? attack : attack + " - "}</li>)}
										</ul>
									</div>
									<div className='weakness-types'>
										<h4>Weakness Type(s) :</h4>
										<ul>
											{weakness.map((weak, id) => <li key={id}>{weak} </li>)}
										</ul>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ModalPokedex