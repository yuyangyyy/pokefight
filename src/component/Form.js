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
  }
  changeInput = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
      <div id="container">
        <form className="form">
          <div className="formContainer">
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              className="text"
              name="firstName"
              type="text"
              value={firstName}
              onChange={this.changeInput}
            />
          </div>
          <div className="formContainer">
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              className="text"
              name="lastName"
              type="text"
              value={lastName}
              onChange={this.changeInput}
            />
          </div>
          <div className="formContainer">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="text"
              name="email"
              type="email"
              value={email}
              onChange={this.changeInput}
            />
          </div>
          <div className="formContainer">
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              className="text"
              name="message"
              value={message}
              onChange={this.changeInput}
            ></textarea>
          </div>
          <input id="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
