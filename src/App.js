import React from "react";
import DialogBox from "./components/DialogBox";
import EndGame from "./components/EndGame";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Potion from "./components/Potion";
import Ranking from "./components/Ranking";
import Transition from "./components/Transition";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import pkball from "./img/logo/Pokeball.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const isHidden = this.state.navfootHidden ? "hidden" : "visible";
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
