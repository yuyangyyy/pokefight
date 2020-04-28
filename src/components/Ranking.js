import React from "react";

import "./Ranking.css";

class Ranking extends React.Component {
  render() {
    return (
      <div>
        <div id="container">
          <div className="player">
            <h3>TOP 5 PLAYERS RANKING</h3>
            <hr />
            <div className="listContainer">
              <div>
                <ul className="list">
                  <li>Pseudo1</li>
                  <li>Pseudo2</li>
                  <li>Pseudo3</li>
                  <li>Pseudo4</li>
                  <li>Pseudo5</li>
                </ul>
              </div>
              <div>
                <ul className="list" id="pts">
                  <li>000 pts</li>
                  <li>000 pts</li>
                  <li>000 pts</li>
                  <li>000 pts</li>
                  <li>000 pts</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="player">
            <h3>TOP 5 POKEMON FIGHTERS</h3>
            <hr />
            <div className="listContainer">
              <div>
                <ul className="list">
                  <li>Pokemon1</li>
                  <li>Pokemon2</li>
                  <li>Pokemon3</li>
                  <li>Pokemon4</li>
                  <li>Pokemon5</li>
                </ul>
              </div>
              <div>
                <ul className="list" id="times">
                  <li>000 times</li>
                  <li>000 times</li>
                  <li>000 times</li>
                  <li>000 times</li>
                  <li>000 times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
