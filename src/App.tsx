import React, { useState } from 'react';

//Importing files
import "./styles/App.scss"

// Adding Components
import Song from './components/song'
import Player from './components/player'

// Import util
import data from "./utils/utils"

function App() {
  //state
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(data()[0])
  const [isPlaying, setIsPlaying] = useState(false)



  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
