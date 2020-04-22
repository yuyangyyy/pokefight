import React from "react"
import './ModalPokedex.css'

class ModalPokedex extends React.Component {
    constructor(props) {
        super(props)
    }

    // handleClickModal(event){
    //     const close = document.getElementsByClassName("ModalPokedex")
    //     close[0].style.display = 'none'
    //     console.log(close[0])
    // }
    render() {
        const attacks = ["Bump", "Tarzan-wip", "Roar", "Grass Cut"]
        const weakness = ['Fire', 'Flight', 'Psy', 'Ice']
        let isDisplay = this.props.displayModal ? "block" : "none"
        return (
            <div className="ModalPokedex" style={{display: isDisplay}}>
                <div className="modal">
                    <div className="modal-content">
                    <span onClick={this.props.method} className="close">&times;</span>
                        <h3>Bulbizar<span> No.001</span></h3>
                        <button>Play</button>
                        <div className="modal-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt={"picture"} />
                            <div>
                                <p>Bulbizarre passe son temps à faire la sieste sous le soleil. Il y a une graine sur son dos. Il absorbe les rayons du soleil pour faire doucement pousser la graine. </p>
                                <div className="stats-container">
                                    <h4>Type : <span>Grass</span></h4>
                                    <div className="simple-data">
                                        <h4>Size : <span>0,70 m</span></h4>
                                        <h4>Weight : <span>6,9 kg</span></h4>
                                    </div>
                                   <div className="usual-attacks">
                                        <h4>Usual attacks :</h4>
                                        <ul>
                                            {attacks.map((attack, id) => <li>{id === 3 ? attack : attack + " - "}</li>)}
                                        </ul>
                                    </div>
                                    <div className='weakness-types'>
                                        <h4>Weakness Type(s) :</h4>
                                        <ul>
                                            {weakness.map((weak, id) => <li>{weak}</li>)}
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