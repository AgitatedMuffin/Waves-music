import React from "react";

const LibrarySong = ({ Song }: any) => {
    return (
        <div className='library-song-container'  >
            <img src={Song.cover} alt="Album cover" />
            <div className="song-description">
                <h3>{Song.name}</h3>
                <h3>{Song.artist}</h3>
            </div>
        </div>
    )
}

export default LibrarySong;