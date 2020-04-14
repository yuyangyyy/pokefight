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
        let firsTButtonIsTrue = this.props.firstButton != undefined ? true: false
        let scndBtnIsTrue = this.props.scndButton != undefined ? true: false
        let inputIsTrue = this.props.idDialogBox != undefined ? true: false

        return(
            <div className="box">
                <div className="DialogBox" style={{width: this.props.dialogSize}}>
                    <p>{this.props.textDialog}</p>
                    <input 
                    className={inputIsTrue ? "" : "display-none"}
                    id={this.idDialogBox}
                    name={this.idDialogBox}
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}/>
                    <div className="button-group">
                        <button className={firsTButtonIsTrue ? "" : "display-none"}>{this.props.firstButton}</button>
                        <button className={scndBtnIsTrue ? "" : "display-none"}>{this.props.scndButton}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogBox