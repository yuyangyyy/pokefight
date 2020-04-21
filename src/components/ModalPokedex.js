import React from "react"
import './ModalPokedex.css'

class ModalPokedex extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ModalPokedex">
                <div className="modal">
                    <span className="close">&times;</span>
                    <div className="modal-content">
                        <h3>{this.props.name}<span>No.{this.props.id}</span></h3>
                        <button>Play</button>
                        <div className="modal-container">
                            <img src={this.props.image} alt={`${this.props.id}. ${this.props.name} - picture`} />
                            <div>
                                <p>{this.props.description}</p>
                                <div>
                                    <p>Size: {this.props.size}</p>
                                    <p>Weight: {this.props.weight}</p>
                                    <ul>Usual attacks
                                        {this.props.attacks.map((attack, id) => <li key={id}>{attack}</li>)}
                                    </ul>
                                    {/* <p>Weakness type</p> */}
                                    <p>Type: {this.props.pokemonsType}</p>
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