import React from "react";
import { Link } from 'react-router-dom'
import "./DialogBox.css";

const Button = () => {
  return (
    <button>Confirm</button>
  )
}

class DialogBox extends React.Component {

  state = { secondPlayer: "" };

  handleChange = (event) => {
    this.setState({ secondPlayer: event.target.value });
  }

  render() {

    return (
      <div className="box">
        <div className="DialogBox" style={{width: "200px", height: "25px"}}>
          <p>Choose your pokemon</p>
        </div>
      </div>
    );
  }
}

export default DialogBox;
