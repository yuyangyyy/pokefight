import React from "react";
import DialogBox from "./components/DialogBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Potion from "./components/Potion";
import Ranking from "./components/Ranking";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Transition from "./components/Transition";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
        {/*
        <div className="prez-diagbox">
          <Potion />
          <DialogBox
            textDialog="Welcome to the world of PokeFight! Start by entering your username"
            idDialogBox="pseudoPlayer1"
            firstButton="Confirm"
            placeholder="Player 1"
          />
          <DialogBox
            textDialog="Who do you want to fight ?!"
            firstButton="Computer"
            scndButton="Friend"
          />
          <DialogBox
            textDialog="Enter your friend's name :"
            idDialogBox="pseudoPlayer2"
            firstButton="Confirm"
            placeholder="Player 2"
          />
          <DialogBox
            textDialog="Now, Player1 choose your Pokémon!"
            dialogSize="280px"
          />
        </div>
        <Ranking />
        <Transition />
        <Form />
        <Footer /> */}
        <Switch>
          <Route exact path="/" />
          <Route exact path="/new-game" component={DialogBox} />
          <Route exact path="/pokedex" component={Potion} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/contact" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
