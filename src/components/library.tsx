import React from "react";
import LibrarySong from "./library_song";

const Library = ({ songs }: any) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song: any) => <LibrarySong Song={song} />)}
            </div>

        </div >
    )
}

export default Library;