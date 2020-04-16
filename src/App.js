
import React from "react";
import Ranking from "./component/Ranking";
import React from 'react';
import DialogBox from './components/DialogBox';
import Potion from './components/Potion'
import Transition from './1. pages/Transition';

function App() {
  return (
    <div className="App">
      <Ranking />
      <Potion />
      <DialogBox textDialog="Welcome to the world of PokeFight! Start by entering your username" idDialogBox="pseudoPlayer1" firstButton="Confirm" placeholder="Player 1"/>
      <DialogBox textDialog="Who do you want to fight ?!" firstButton="Computer" scndButton="Friend"/>
      <DialogBox textDialog="Enter your friend's name :" idDialogBox="pseudoPlayer2" firstButton="Confirm" placeholder="Player 2"/>
      <DialogBox textDialog="Now, Player1 choose your Pokémon!" dialogSize="280px" />
      <Transition />
    </div>
  );
}

export default App;
