import React from "react"
import './ModalPokedex.css'

class ModalPokedex extends React.Component {
    constructor(props) {
        super(props)
    }
    render()
    {
    const attacks = ["Bump", "Tarzan-wip", "Roar", "Grass Cut"]   
        return (
            <div className="ModalPokedex">
                <div className="modal">
                    <span className="close">&times;</span>
                    <div className="modal-content">
                        <h3>{/*this.props.name*/}Bulbizar<span>No.001{/*this.props.id*/}</span></h3>
                        <button>Play</button>
                        <div className="modal-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/1.png"{/*this.props.image*/} alt={`${/*${this.props.id}. ${this.props.name}*/} - picture`} />
                            <div>
                                <p>{/*this.props.description*/}Bulbizarre passe son temps à faire la sieste sous le soleil. Il y a une graine sur son dos. Il absorbe les rayons du soleil pour faire doucement pousser la graine. </p>
                                <div>
                                    <p>Size: 0,70 m {/*this.props.size*/}</p>
                                    <p>Weight: 6,9 kg{/*this.props.weight*/}</p>
                                    <ul>Usual attacks
                                        {attacks.map((attack, id) => <li /*key={id}*/>{attack}</li>)}
                                    </ul>
                                    <p>Weakness Type</p>
                                    <p>Type: Grass{/*this.props.pokemonsType*/}</p>
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