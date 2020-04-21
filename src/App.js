import React from "react";

import AttackButton from "./components/AttackButton";
import Comment from "./components/Comment";
import DialogBox from "./components/DialogBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Potion from "./components/Potion";
import Picture from "./components/Picture";
import StatutPokemon from "./components/StatutPokemon";
import Ranking from "./components/Ranking";
import Transition from "./components/Transition";

//pics for ex
import Png from "./img/pokemon/Png.png";
import Png2 from "./img/pokemon/Png2.png";

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
      <div className="pic-stat1">
        <div className="stat">
          <StatutPokemon />
        </div>
        <Picture pic={Png2} />
      </div>
      <div className="pic-stat2">
        <div className="stat">
          <StatutPokemon />
        </div>
        <Picture pic={Png} />
      </div>
      <AttackButton />
      <Potion />
      <Comment commentText="Go! Pikachu !" />
      <Comment commentText="(PokemonName) used (AttackName)!" />
      <Comment commentText="Enemy (PokemonName) used (AttackName)!" />
      <Comment commentText="It's super effective!" />
      <Comment commentText="Critical hit!" />
      <Comment commentText="(PokemonName)'s attack missed!" />
      <Comment commentText="(PokemonName) used RECOVER!" />
      <Comment commentText="(PokemonName) regained health!" />
      <Comment commentText="(PokemonName) fainted!" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
