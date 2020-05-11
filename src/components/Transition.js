import React from 'react';
import { Link, Redirect } from "react-router-dom";

import fight from '../img/logo/fight.png'

import './Transition.css';
import './Types.css'

class Transition extends React.Component {

	state = {
		count: 3,
	
	}

	redirect = () => {
		if(this.state.count === -2){
		return <Redirect to='/fight'/>
		}
	}

	render() {
		const { count } = this.state
		const { selectPlayer1, selectPlayer2 } = this.props
		return (
			<div className='container' >
				<img id='transition-pic' src={fight} alt='' style={this.state.count <= 0 ? {display: 'block'} : {display:'none'}} />
				<div className={`left ${selectPlayer1[0].type}`}>
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${selectPlayer1[0].id}.png`} alt='' />
				</div>
				<div className='white' style={this.state.count <= 0 ? {display: 'none'} : {display:'flex'}}>
					<div id='count'>{count}</div>
				</div>
				<div className={`right ${selectPlayer2[0].type}`}>
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${selectPlayer2[0].id}.png`} alt='' />
				</div>
				{this.redirect()}
			</div>
		)
	}
	componentDidMount() {
		this.countDown =
			setInterval(() => {
				if (this.state.count > -2) {
					this.setState({ count: this.state.count - 1 }, ()=> console.log(this.state.count))
				}
			}, 1000)
	}
}

export default Transition