import React from "react";

import DialogBox from "./components/DialogBox";
import Fight from "./components/Fight";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";
import Transition from "./components/Transition";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      <Ranking />
      <Transition />
      <div className="fight">
        <Fight />
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
