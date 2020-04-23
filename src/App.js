import React from "react";
import DialogBox from './components/DialogBox';
import EndGame from './components/EndGame'
import Footer from './components/Footer'
import Form from "./components/Form";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Potion from "./components/Potion";
import Ranking from "./components/Ranking";
import Transition from "./components/Transition";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import pkball from "./img/logo/Pokeball.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="prez-diagbox">
        <Potion />
        <DialogBox textDialog="Welcome to the world of PokeFight! Start by entering your username" idDialogBox="pseudoPlayer1" firstButton="Confirm" placeholder="Player 1"/>
        <DialogBox textDialog="Who do you want to fight ?!" firstButton="Computer" scndButton="Friend"/>
        <DialogBox textDialog="Enter your friend's name :" idDialogBox="pseudoPlayer2" firstButton="Confirm" placeholder="Player 2"/>
        <DialogBox textDialog="Now, Player1 choose your Pokémon!" dialogSize="280px" />
      </div>
      <EndGame />
      <Ranking />
      <Transition />
      <Form />
      <Footer/>

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const isHidden = this.state.navfootHidden ? "hidden" : "visible";
    return (
      <Router>
        <div className="App">
          <Navbar />

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
            <Route exact path="/" component={Intro} />
            <Route path="/new-game">
              <div className="diag-pack">
                <Link exact to='/new-game-1'><img src={pkball} /></Link>
                <DialogBox
                  textDialog="Welcome to the world of PokeFight! Start by entering your username"
                  idDialogBox="pseudoPlayer1"
                  firstButton="Confirm"
                  placeholder="Player 1"
                />
              </div>
            </Route>
            <Route exact path='/new-game-1'>
            <div className="diag-pack">
              <Link exact to='/new-game-2'><img src={pkball} /></Link>
                <DialogBox
                  textDialog="Who do you want to fight ?!"
                  firstButton="Computer"
                  scndButton="Friend"
                />
              </div>
            </Route>
            <Route exact path='/new-game-2'>
            <div className="diag-pack">
              <Link exact to='/new-game-3'><img src={pkball} /></Link>
                <DialogBox
                  textDialog="Enter your friend's name :"
                  idDialogBox="pseudoPlayer2"
                  firstButton="Confirm"
                  placeholder="Player 2"
                />
              </div>
            </Route>
            <Route exact path='/new-game-3'>
            <div className="diag-pack">
              <Link exact to='/new-game-4'><img src={pkball} /></Link>
                <DialogBox
                  textDialog="Now, Player1 choose your Pokémon!"
                  dialogSize="280px"
                />
              </div>
            </Route>
            <Route path="/pokedex" component={Potion} />
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
