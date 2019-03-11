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
    active: false,
    clicked: [0]
  };

  increaseScore = () => {
    this.setState({score: this.state.score +1});
    this.toggleClass();
  };

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

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  //get id of goji clicked
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
    // console.log(this.state.clicked);
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
              increaseScore={this.increaseScore}
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


//populate 12 pictures which are clickable --DONE
  //map over array of pictures to display them in cards --DONE
//Each picture will modify a state for that picture to say that it has been clicked
//Each time a picture is clicked the pictures reorder themselves randomly
  //Player score increases by 1 --DONE
  //if picture has already been clicked, player loses
  //screen shake?
  //score resets to 0
//If score reaches 12 Player wins
  //screen hops?
  //Congratulations message appears
  //Game restarts


//Components
  //picture card --DONE
  //Header with score and title of game --DONE
  
  
