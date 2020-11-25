import Album from "../templates/AlbumInterface";

function setMediaSession(currentSong: Album, onPlayHandler: Function) {
    //Listeners
    navigator.mediaSession?.setActionHandler("play", () => onPlayHandler())
    navigator.mediaSession?.setActionHandler("pause", () => onPlayHandler())
    //MediaSession
    if ('mediaSession' in navigator) {
        // @ts-ignore
        navigator.mediaSession.metadata = new MediaMetadata({
            title: currentSong.name,
            artist: currentSong.artist,
            artwork: [
                { src: currentSong.cover, sizes: '96x96', type: 'image/png' },
                { src: currentSong.cover, sizes: '128x128', type: 'image/png' },
                { src: currentSong.cover, sizes: '192x192', type: 'image/png' },
                { src: currentSong.cover, sizes: '256x256', type: 'image/png' },
                { src: currentSong.cover, sizes: '384x384', type: 'image/png' },
                { src: currentSong.cover, sizes: '512x512', type: 'image/png' },
            ]
        });
    }

}

export default setMediaSession;
