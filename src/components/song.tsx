import React from 'react'


const Song = ({ currentSong }: any) => {
    return (
        <div className='song-container'  >
            <img src={currentSong.cover} alt="Album cover" />
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
        </div>
    )
}

export default Song;