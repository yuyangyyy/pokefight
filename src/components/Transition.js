import React from 'react';
import { Link } from "react-router-dom";

import './Transition.css';
import './Types.css'

class Transition extends React.Component {

	state = {
		count: 5
	}

	render() {
		const { count } = this.state
		const { selectPlayer1, selectPlayer2 } = this.props
		return (
			<div className='container' >
				<div className={`left ${selectPlayer1[0].type}`}>
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${selectPlayer1[0].id}.png`} />
				</div>
				<Link to='/fight'><div className='white'><div id='count'>{count}</div></div></Link>
				<div className={`right ${selectPlayer2[0].type}`}>
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${selectPlayer2[0].id}.png`} />
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.countDown =
			setInterval(() => {
				if (this.state.count > 0) {
					this.setState({ count: this.state.count - 1 })
				}
			}, 1000)
	}

}

export default Transition