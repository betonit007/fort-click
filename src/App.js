import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import logo from './images/fortnite.png';
import victory from './images/victory.png';
import loser from './images/dance.gif';
import "./App.css";

class App extends React.Component {

state = {
  friends,
  score: 0,
  highscore: 0,
  logo: logo,
  end: false
}

handleGuess = (guess, id) => {
  if (guess === true) {
    this.setState({logo: loser, end: true});
    
    
  }
  else if (guess === "false") {
    friends[id-1].guessed = true;
    
    if (this.state.score === this.state.highscore && this.state.score === 11) {
       this.setState({friends, score: this.state.score + 1, highscore: this.state.highscore + 1, logo: victory, end: true});
    }
    else if (this.state.score === 11 && this.state.highscore === 12) {
      this.setState({friends, score: this.state.score + 1, logo: victory, end: true})
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
  this.setState({friends, score: 0, logo: logo, end: false});
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
       
      
        <div className='cardHolder'>
        {!this.state.end ? 
          this.shuffle(this.state.friends.map(i => (
            <FriendCard
              handleGuess = {this.handleGuess}
              restartGame = {this.restartGame}
              guessed = {i.guessed}
              id={i.id}
              key={i.id}
              name={i.name}
              image={i.image}
            />
          ))) :
          <></>
        }
          </div>
        
      </Wrapper>
    );
  }
}

export default App;
