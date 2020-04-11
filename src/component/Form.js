import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName(event) {
    this.setState({ firstName: event.target.value });
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name">First name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.state.firstName}
          onChange={this.changeName}
        />
      </form>
    );
  }
}

export default Form;
