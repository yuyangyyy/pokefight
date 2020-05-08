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
    const { firstButton, scndButton, idDialogBox } = this.props;

    return (
      <div className="box">
        <div className="DialogBox" style={{height: "150px"}}>
          <p>Enter your friend's name :</p>
            <input
              id="pseudoPlayer2"
              name="pseudoPlayer2"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Player 2"
              required
            />
            <button style={this.state.secondPlayer !== '' ? { display: 'block' } : { display: 'none' }}>
              <Link to={{
                pathname: "/pokedex",
                player2: this.state.firstPlayer}}
                >Confirm</Link>
            </button>
        </div>
      </div>
    );
  }
}

export default DialogBox;
