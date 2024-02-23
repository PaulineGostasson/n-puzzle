import React, { useState } from 'react';
import './WelcomeScreen.css'; 
import GameBoard from '../gameboard/gameBoard';

function WelcomeScreen() {
  const [showGameBoard, setShowGameBoard] = useState(false);

// Hanterar skärmbyte till GameBoard skärmen
  const handleStartGame = () => {
    setShowGameBoard(true);
  };


  if (showGameBoard) {
    return <GameBoard />;
  }

  return (
    <div className="welcome-screen-container">
      <div className="welcome-screen-text">
        <h1>Hello, my name is Pauline Holgersson Göstasson!</h1>
        <p>I'm soon turning 26 years old and I'm graduating in June with a degree in Frontend Development. This is my rendition of the classic 15-puzzle game, and I sincerely hope to become part of your team at Grebban.</p>
        <p>I'm looking forward to meeting you again in the next interview. Wishing you a wonderful weekend. Warm regards, Pauline.</p>
        <p>Game Instructions: Move the tiles to arrange them in numerical order from 1 to 15, leaving the bottom right corner empty.</p>
        <button onClick={handleStartGame} className="start-game-button">Start Game</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
