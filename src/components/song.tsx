import React, { useEffect, useRef, useState } from 'react'
import { animate, AnimationControls, motion, useAnimation, useMotionValue } from 'framer-motion'
import { turnToDegrees } from "../utils/functions"


const Song = ({ currentSong, isPlaying, songInfo, inputClicked }: any) => {

    //Hooks
    const imgRef = useRef<HTMLImageElement>(document.createElement("img"));
    //Effects
    const [rotation, setRotation] = useState(0)
    useEffect(() => {
        if (inputClicked) {
            setRotation(turnToDegrees(songInfo.currentTime, songInfo.duration, 1))
        }
    }, [inputClicked, isPlaying, rotation, songInfo.currentTime, songInfo.duration])



    return (
        <div className='song-container'  >
            <motion.img ref={imgRef} src={currentSong.cover} alt="Album cover"
                animate={isPlaying ? { rotate: [rotation, rotation + 360] } : { rotate: rotation }}
                transition={isPlaying ? { repeat: Infinity, duration: 4, ease: "linear" } : { repeat: 0 }}
            />
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
        </div>
    )
}

export default Song;