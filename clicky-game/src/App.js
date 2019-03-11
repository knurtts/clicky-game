import React, { Component } from 'react';
import Header from "./components/Header/Header"
import GojiCard from "./components/GojiCard/GojiCard"
import './App.css';
import images from "./images.json";

class App extends Component {
  state = {
    gojis: images,
    score: 0,
    maxScore: 0,
    clicked: [0]
  };

  // increaseScore = () => {
  //   this.setState({score: this.state.score +1});
  //   this.toggleClass();
  // };

  shuffleData = images => {
    let i = images.length -1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i+1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
      i--;
    }
    return images;
  }

  isClicked = id => {
    for (let i = 0; i < this.state.clicked.length; i++) {

      if (this.state.clicked.includes(id)) {
        this.endGame();
        break;
      } else {
        this.setState({
            gojis: this.shuffleData(images),
            score: this.state.score + 1,
            clicked: this.state.clicked.concat(id)
          })
        }
      }
  };

  endGame = () => {
    if(this.state.score > this.state.maxScore){
      this.setState({
        maxScore: this.state.score,
        score: 0,
        clicked: [0],
        gojis: this.shuffleData(images)
      });
      alert("Nope! You've clicked that one before.");
    } else {
      this.setState({
        score: 0, 
        clicked: [0],
        gojis: this.shuffleData(images)
      });
      alert("Nope! You've clicked that one before.");
    };
  };

  render() {
    return (<>
      <Header currentScore={this.state.score} highScore={this.state.maxScore} end={this.endGame} />
      <div className="container">
        <div className="row">
          {this.state.gojis.map((goji) => 
          (<GojiCard 
              idCard={goji.id}
              src={goji.img}
              name={goji.name}
              toggle={this.toggleClass}
              newClass={this.state.active ? "shake" : null}
              clicked={this.isClicked}
            />)
          )}
        </div>
      </div>
    </>);
  }
}

export default App;
