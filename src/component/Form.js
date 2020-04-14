import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  changeLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  changeEmail(event) {
    this.setState({ email: event.target.value });
  }
  changeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            className="text"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.changeFirstName}
          />
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            className="text"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.changeLastName}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            className="text"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <label htmlFor="message">Your message:</label>
          <textarea
            id="message"
            className="text"
            name="message"
            value={this.state.message}
            onChange={this.changeMessage}
          ></textarea>
          <input id="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
