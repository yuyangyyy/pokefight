import React from 'react'
import './DialogBox.css'


class DialogBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {firstPlayer: ""}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({firstPlayer: event.target.value})
    }

    render(){
        const {firstButton, scndButton, idDialogBox} = this.props

        return(
            <div className="box">
                <div className="DialogBox" style={{width: this.props.dialogSize}}>
                    <p>{this.props.textDialog}</p>
                    <input 
                    className={idDialogBox ? "" : "display-none"}
                    id={this.idDialogBox}
                    name={this.idDialogBox}
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}/>
                    <div className="button-group">
                        <button className={firstButton ? "" : "display-none"}>{firstButton}</button> 
                        <button className={scndButton ? "" : "display-none"}>{scndButton}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogBox