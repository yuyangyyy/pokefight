import React from 'react'
import "./SortBox.css"

class SortBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { sortType } = this.props
        return (
            <div className="SortBox" style={{width: this.props.sortBoxSize}}>
                <select onChange={this.props.method} id={this.props.id} >
                    <option value="">{this.props.sortTitle}</option>
                    {sortType.map(type => {
                        return <option value={type}>{type}</option>
                    })
                    }
                </select>
            </div>
        )
    }
}

export default SortBox