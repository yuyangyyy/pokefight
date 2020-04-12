import React from "react";
import "./App.css";
import Form from "./component/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form name="First name" />
        <Form name="Last name" />
      </div>
    );
  }
}

export default App;
