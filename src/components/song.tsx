import React, { useRef } from 'react'
import { motion } from 'framer-motion'


const Song = ({ currentSong, isPlaying }: any) => {
    //Ref
    const imgRef = useRef<HTMLImageElement>(document.createElement("img"));


    return (
        <div className='song-container'  >
            <motion.img ref={imgRef} src={currentSong.cover} alt="Album cover" animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 4, ease: "linear" } : { repeat: 0 }} />
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
        </div>
    )
}

export default Song;