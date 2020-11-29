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
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [inputClicked, setInputClicked] = useState(false)



  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} songInfo={songInfo} inputClicked={inputClicked} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
        songInfo={songInfo} setSongInfo={setSongInfo}
        inputClicked={inputClicked} setInputClicked={setInputClicked}
      />
    </div>
  );
}

export default App;
