import React from 'react';
import { Link } from "react-router-dom";

import './Transition.css';

class Transition extends React.Component {

	state = {
		count: 5
	}

	render() {
		const { count } = this.state
		return (
			<div className='container'>
				<div className='left'><img src="https://pokeres.bastionbot.org/images/pokemon/25.png" /></div>
				<Link to='/new-game-6'><div className='white'><div id='count'>{count}</div></div></Link>
				<div className='right'><img src="https://pokeres.bastionbot.org/images/pokemon/7.png" /></div>
				<div className="test"></div>
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