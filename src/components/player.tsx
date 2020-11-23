import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faPlay } from "@fortawesome/free-solid-svg-icons"

const Player = () => {
    return (
        <div className='player'>
            <p>Start Time</p>
            <input type="range" name="Time" id="time" />
            <p>End Time</p>
            <div className="play-control"></div>
            <FontAwesomeIcon className="skipBack" icon={faAngleLeft} />
            <FontAwesomeIcon className="play" icon={faPlay} />
            <FontAwesomeIcon className="skipForward" icon={faAngleRight} />
        </div>
    )
}

export default Player;