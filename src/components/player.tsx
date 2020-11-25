import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import setMediaSession from "../utils/mediaSession"

const Player = ({ currentSong, isPlaying, setIsPlaying }: any) => {
    // states
    const [playIcon, setPlayIcon] = useState(faPlay);
    // Refs
    const audioRef = useRef<HTMLAudioElement>(document.createElement("audio"));
    //Event Handlers
    function onPlayHandler() {
        if (isPlaying) {
            audioRef.current.pause();
            setPlayIcon(faPlay)
        }
        else {
            audioRef.current.play();
            setPlayIcon(faPause)
        }
        setIsPlaying(!isPlaying)
    }
    setMediaSession(currentSong, onPlayHandler)


    return (
        <div className='player'>
            <div className="seek">
                <p>Start Time</p>
                <input type="range" name="time" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={onPlayHandler} className="play" size="2x" icon={playIcon} />
                <FontAwesomeIcon className="skipForward" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}


export default Player;