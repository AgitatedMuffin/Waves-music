import Album from "../templates/AlbumInterface"
import { v4 as uuidv4 } from "uuid"


function chillHop(): Album[] {
    return ([
        {
            name: "Hidden Structure",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            id: uuidv4(),
            color: ["#7A7361", "#608C81"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            active: false
        },
        {
            name: "What Was Before",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Philanthrope, Leavv",
            id: uuidv4(),
            color: ["#7A7361", "#608C81"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9923",
            active: false
        },
        {
            name: "Deeper",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Aviino",
            id: uuidv4(),
            color: ["#65A3E0", "#ED7CC4"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10460",
            active: false
        },
        {
            name: "Still Life Dreamtime",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Aviino",
            id: uuidv4(),
            color: ["#65A3E0", "#ED7CC4"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10459",
            active: false
        },
        {
            name: "Wildlife",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, chromonicci",
            id: uuidv4(),
            color: ["#793634", "#36201F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
            active: false
        },
        {
            name: "Upstate",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, Brock Berrigan, The Field Tapes",
            id: uuidv4(),
            color: ["#793634", "#36201F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10245",
            active: false
        },
    ])

}

export default chillHop;