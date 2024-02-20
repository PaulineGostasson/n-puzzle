// App.js
import React, { useState } from 'react';
import './App.css';
import BigSquare from './BigSquare';
import StartScreen from './StartScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!gameStarted ? (
          <StartScreen onStart={startGame} />
        ) : (
          <BigSquare />
        )}
      </header>
    </div>
  );
}

export default App;
