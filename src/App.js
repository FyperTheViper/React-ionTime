import React, { Component } from 'react';
import './App.css';
import celestialBodies from "./components/solarSystem.json"
import SolCards from "./components/SolCards";
import Scoreboard from "./components/Scoreboard";
import Header from './components/header';

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
    state = {
      celestialBodies,
      score: 0,
      topScore: 0,
      showAlert: 0,
      showSuccess: 0,
      clickedPicture: []
    };
  
    clickedPicture = id => {
      let clickedPicture = this.state.clickedPicture;
      let score = this.state.score;
      let topScore = this.state.topScore;
      this.setState({
        showAlert: 0
      });
  
      if (clickedPicture.indexOf(id) === -1) {
        clickedPicture.push(id);
        this.handleIncrement();
        this.makeShuffle();
      } else if (this.state.score === 12) {
        this.setState({
          showSuccess: 1,
          score: 0,
          clickedPicture: []
        });
      } else {
        this.setState({
          score: 0,
          clickedPicture: []
        });
        this.setState({
          showAlert: 1
        });
      }
  
      if (score > topScore) {
        this.setState({
          topScore: score
        });
      }
    };
  
    handleIncrement = () => {
      this.setState({ score: this.state.score + 1 });
    };
  
    makeShuffle = () => {
      this.setState({ celestialBodies: shuffle(celestialBodies) });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="alert alert-danger" style={{ opacity: this.state.showAlert }}>
                 That world has already been selected. Click another to start again.
            </div>
        <div className="alert alert-success" style={{ opacity: this.state.showSuccess }}>
                Your memory is pristine. 
        </div>
        <Scoreboard
          title="Planetary Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="planet-container">
          {this.state.celestialBodies.map(celestialBodies => (
            <SolCards
              key={celestialBodies.id}
              id={celestialBodies.id}
              name={celestialBodies.name}
              photo={celestialBodies.photo}
              clickedPicture={this.clickedPicture}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
