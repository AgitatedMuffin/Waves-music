import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import setMediaSession from "../utils/mediaSession"

const Player = ({ currentSong, isPlaying, setIsPlaying }: any) => {

    //Set MediaSession
    setMediaSession(currentSong, onPlayHandler)

    // states
    const [playIcon, setPlayIcon] = useState(faPlay);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

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
    function getReadableTime(value: number): string {
        const readableTime = Math.floor(value / 60) + ":" + ("0" + Math.floor(value % 60)).slice(-2);
        return (readableTime)

    }



    return (
        <div className='player'>
            <div className="seek">
                <p>{getReadableTime(songInfo.currentTime)}</p>
                <input type="range" name="time" min={0} max={songInfo.duration}
                    value={songInfo.currentTime} onChange={onDragHandler} />
                <p>{getReadableTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={onPlayHandler} className="play" size="2x" icon={playIcon} />
                <FontAwesomeIcon className="skipForward" size="2x" icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={onTimeChangeHandler} onLoadedMetadata={onTimeChangeHandler} ref={audioRef}
                src={currentSong.audio}></audio>
        </div>
    )
}


export default Player;