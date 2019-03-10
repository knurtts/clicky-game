import React, { Component } from 'react';
import Header from "./components/Header/Header"
import GojiCard from "./components/GojiCard/GojiCard"
import './App.css';
import images from "./images.json";

class App extends Component {
  state = {
    gojis: images,
    score: 0,
    maxScore: 0
  };

  increaseScore = () => {
    this.setState({score: this.state.score +1});
  };

  render() {
    return (<>
      <Header currentScore={this.state.score} highScore={this.state.maxScore}/>
      <div className="container">
        <div className="row">
          {this.state.gojis.map((goji) => 
          (<GojiCard 
              key={goji.id}
              src={goji.img}
              name={goji.name}
              increaseScore={this.increaseScore}
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