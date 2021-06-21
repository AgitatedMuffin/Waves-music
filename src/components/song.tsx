import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { turnToDegrees } from "../utils/functions"


const Song = ({ currentSong, isPlaying, songInfo, inputClicked }: any) => {

    //Hooks
    const imgRef = useRef<HTMLImageElement>(document.createElement("img"));
    const [rotation, setRotation] = useState(0)
    //Effects
    useEffect(() => {
        // Set rotation when we click or when it stops playing
        if (inputClicked || !isPlaying) {
            const currentDegrees = turnToDegrees(songInfo.currentTime, songInfo.duration, songInfo.duration / 4);
            setRotation(currentDegrees);

        }
    }, [inputClicked, isPlaying, songInfo.currentTime, songInfo.duration])


    return (
        <div className='song-container'  >
            <motion.img ref={imgRef} src={currentSong.cover} alt="Album cover"
                animate={isPlaying ?
                    inputClicked ? { rotate: rotation } : { rotate: [rotation, rotation + 360] } : { rotate: rotation }}
                transition={isPlaying ? inputClicked ? { repeat: 0 } : { repeat: Infinity, duration: 4, ease: "linear" } : { repeat: 0 }}
            />
            <h1>{currentSong.name}</h1>
            {/* <h2>{currentSong.artist}</h2> */}
        </div>
    )
}

export default Song;