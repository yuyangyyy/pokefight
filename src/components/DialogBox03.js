import React from "react";

import "./DialogBox.css";

class DialogBox extends React.Component {

  state = { firstPlayer: "" };

  handleChange = (event) => {
    this.setState({ firstPlayer: event.target.value });
  }

  render() {
    const { firstButton, scndButton, idDialogBox } = this.props;

    return (
      <div className="box">
        <div className="DialogBox" style={{ width: this.props.dialogSize }}>
          <p>Who do you want to fight ?!</p>
          <div className="button-group">
            <button disabled>Computer</button>
            <button>Friend</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogBox;
