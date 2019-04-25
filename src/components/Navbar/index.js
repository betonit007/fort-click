import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <img alt="Fortnite Logo" className="banner" src={props.logo}></img>
      <div className='scores'>
        <div id="score">Your Score: {props.score}</div>
        <p onClick={() => props.restartGame()} id="restart">Restart Game</p>
        <div id="hScore">High Score: {props.highscore}</div>
      </div>
  
</nav>
  );
}

export default Navbar;