import React from 'react';
//Importing files
import "./styles/App.scss"

// Adding Components
import Song from './components/song'
import Player from './components/player'

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
