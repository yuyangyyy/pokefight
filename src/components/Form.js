import React from "react";

import "./Form.css";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  changeInput = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
        <form className="form">
          <label htmlFor="firstName" id="first">
            First name :
          </label>
          <input
            id="firstName"
            className="text"
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.changeInput}
          />
          <label htmlFor="lastName">Last name :</label>
          <input
            id="lastName"
            className="text"
            name="lastName"
            type="text"
            value={lastName}
            onChange={this.changeInput}
          />
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            className="text"
            name="email"
            type="email"
            value={email}
            onChange={this.changeInput}
          />
          <label htmlFor="message">Your message :</label>
          <textarea
            id="message"
            className="text"
            name="message"
            value={message}
            onChange={this.changeInput}
          ></textarea>
          <input id="button" type="submit" value="SUBMIT" />
        </form>
    );
  }
}

export default Form;
