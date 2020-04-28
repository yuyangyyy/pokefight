import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DialogBox from "./components/DialogBox";
import EndGame from "./components/EndGame";
import Fight from "./components/Fight";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Pokedex from "./components/Pokedex";
=======
import Pokedex from "./components/Pokedex"
>>>>>>> c04687aa88c2f54bb20b03403d0637af77d05211
import Ranking from "./components/Ranking";
import Transition from './components/Transition';

import pkball from './img/logo/pokeball contour fin.png'

import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/new-game">
              <div className="diag-pack">
                <Link exact to="/new-game-1">
                  <img src={pkball} />
                </Link>
                <DialogBox
                  textDialog="Welcome to the world of PokeFight! Start by entering your username"
                  idDialogBox="pseudoPlayer1"
                  firstButton="Confirm"
                  placeholder="Player 1"
                />
              </div>
            </Route>
            <Route path="/new-game-1">
              <div className="diag-pack">
                <Link to="/new-game-2">
                  <img src={pkball} />
                </Link>
                <DialogBox
                  textDialog="Who do you want to fight ?!"
                  firstButton="Computer"
                  scndButton="Friend"
                />
              </div>
            </Route>
            <Route path="/new-game-2">
              <div className="diag-pack">
                <Link to="/new-game-3">
                  <img src={pkball} />
                </Link>
                <DialogBox
                  textDialog="Enter your friend's name :"
                  idDialogBox="pseudoPlayer2"
                  firstButton="Confirm"
                  placeholder="Player 2"
                />
              </div>
            </Route>
            <Route path="/new-game-3">
              <div className="diag-pack">
                <Link to="/new-game-4">
                  <img src={pkball} />
                </Link>
                <DialogBox
                  textDialog="Now, Player1 choose your Pokémon!"
                  dialogSize="280px"
                />
              </div>
            </Route>
<<<<<<< HEAD
            <Route path='/new-game-4' component={Pokedex}/>
            <Route path='/new-game-5' component={Transition} />
            <Route path='/new-game-6' component={Fight} />
            <Route path='/new-game-7' component={EndGame} />
=======
>>>>>>> c04687aa88c2f54bb20b03403d0637af77d05211
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/contact" component={Form} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
