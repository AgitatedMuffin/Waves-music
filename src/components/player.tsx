import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import setMediaSession from "../utils/mediaSession"
import { getReadableTime } from "../utils/functions"
import { Props } from 'framer-motion/types/types';
import data from "../utils/utils"


const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, inputClicked, setInputClicked }: Props) => {

    //Set MediaSession
    setMediaSession(currentSong, onPlayHandler)

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
    function onTimeChangeHandler(e: React.SyntheticEvent<HTMLAudioElement, Event>) {
        const target = e.target as HTMLMediaElement
        const currentTime = target.currentTime
        const duration = target.duration
        setSongInfo({ currentTime, duration })
    }
    function onDragHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const currentTime = parseInt(e.target.value)
        audioRef.current.currentTime = currentTime
        setSongInfo({ ...songInfo, currentTime })
    }
    function onMouseHoldHandler() {
        setInputClicked(!inputClicked)
    }


    return (
        <div className='player'>
            <div className="seek">
                <p>{getReadableTime(songInfo.currentTime)}</p>
                <input type="range" name="time" min={0} max={songInfo.duration}
                    value={songInfo.currentTime} onChange={onDragHandler}
                    onMouseDown={onMouseHoldHandler} onMouseUp={onMouseHoldHandler} />
                <p>{getReadableTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={onPlayHandler} className="play" size="2x" icon={playIcon} />
                <FontAwesomeIcon onClick={() => setCurrentSong(data()[4])} className="skipForward" size="2x" icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={onTimeChangeHandler} onLoadedMetadata={onTimeChangeHandler} ref={audioRef}
                src={currentSong.audio}></audio>
        </div>
    )
}


export default Player;