import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";


import "./App.css";

class App extends React.Component {

state = {
  friends,
  score: 0,
  highscore: 0,
  logo: "https://static1.squarespace.com/static/5a1bcb0db7411ccec823b109/t/5bcd8429eef1a115dd9bffff/1540195379446/fortnite-mobile_logo.png"
}

handleGuess = (guess, id) => {
  if (guess === true) {
    this.setState({logo: "https://steamuserimages-a.akamaihd.net/ugc/956348816575653701/7BA58E2CFF7A2CF3C8862718B4F60BB8D7E64B21/"});
    
  }
  else if (guess === "false") {
    friends[id-1].guessed = true;
    
    if (this.state.score === this.state.highscore && this.state.score === 11) {
       this.setState({friends, score: this.state.score + 1, highscore: this.state.highscore + 1, logo: "https://cdn130.picsart.com/271007286019211.png?r240x240"})
    }
    else if (this.state.score === this.state.highscore) {

    this.setState({friends, score: this.state.score + 1, highscore: this.state.highscore + 1})
    }
    else {
      this.setState({friends, score: this.state.score + 1});
    }
  }
}

////////Restart////////////
restartGame = () => {
  this.state.friends.map(i=> i.guessed="false");
  this.setState({friends, score: 0, logo: "https://static1.squarespace.com/static/5a1bcb0db7411ccec823b109/t/5bcd8429eef1a115dd9bffff/1540195379446/fortnite-mobile_logo.png"});
}

/////////shuffles friend cards after they are mapped
shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a; 
}
  render() {
    return (
  
      <Wrapper>
        <Navbar 
        score={this.state.score} 
        highscore={this.state.highscore} 
        restartGame={this.restartGame}
        logo={this.state.logo}
        />

        {this.shuffle(this.state.friends.map(i => (
          <FriendCard
            handleGuess = {this.handleGuess}
            restartGame = {this.restartGame}
            guessed = {i.guessed}
            id={i.id}
            key={i.id}
            name={i.name}
            image={i.image}
          />
        )))}
        
      </Wrapper>
    );
  }
}

export default App;
