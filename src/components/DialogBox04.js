import React from "react";

import "./DialogBox.css";

class DialogBox extends React.Component {
  state = { secondPlayer: "" };

  handleChange = (event) => {
    this.setState({ secondPlayer: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <div className="DialogBox" style={{ width: "200px", height: "25px" }}>
          <p>Choose your pokemon</p>
        </div>
      </div>
    );
  }
}

export default DialogBox;
