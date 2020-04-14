import React from 'react';
import DialogBox from './components/DialogBox';

function App() {
  return (
    <div>
      <DialogBox textDialog="Bienvenue dans l'univers de PokeFight ! Commence par rentrer ton pseudo :" idDialogBox="pseudoPlayer1" firstButton="Valider" placeholder="Pseudo n°1"/>
      <DialogBox textDialog="Qui souhaites-tu affronter ?!" firstButton="Ordinateur" scndButton="Ami"/>
      <DialogBox textDialog="Renseigne le nom de ton ami :" idDialogBox="pseudoPlayer2" firstButton="Valider" placeholder="Pseudo n°2"/>
      <DialogBox textDialog="Maintenant, Player1 choisis ton Pokémon !" dialogSize="280px" />
    </div>
  );
}

export default App;
