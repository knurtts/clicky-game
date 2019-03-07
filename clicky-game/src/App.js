import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images.json";

class App extends Component {
  state = {
    gojis: {images},
    score: 0,
    maxScore: 0
  };

  randomize = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


//populate 12 pictures which are clickable
  //map over array of pictures to display them in cards
//Each picture will modify a state for that picture to say that it has been clicked
//Each time a picture is clicked the pictures reorder themselves randomly
  //Player score increases by 1
  //if picture has already been clicked, player loses
  //screen shake?
  //score resets to 0
//If score reaches 12 Player wins
  //screen hops?
  //Congratulations message appears
  //Game restarts


//Components
  //picture card
  //Header with score and title of game