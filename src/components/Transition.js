import React from 'react'
import './Transition.css'

class Transition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 5
        }
    }

    render() {
        const { count } = this.state
        return (
            <div className='container'>
                <div className='left'></div>
                <div className='white'><div id='count'>{count}</div></div>
                <div className='right'></div>
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