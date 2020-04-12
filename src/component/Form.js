import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name">{this.props.name}</label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.changeName}
        />
      </form>
    );
  }
}

export default Form;
