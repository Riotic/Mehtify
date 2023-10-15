import '../../css/Body.css';
import MusicDisplay from '../MusicDisplay';

import React, { useState, useEffect } from "react";

function Body() {
    const url = "https://mehtify.garon1.repl.co/musics";
    const [data, setData] = useState([]);
    const [currentPlayingMusic, setCurrentPlayingMusic] = useState(null);

    const handlePlay = (musicToPlay) => {
        if (currentPlayingMusic !== musicToPlay) {
            // Mettre en pause la musique en cours
            if (currentPlayingMusic) {
                const audioElement = document.getElementById("audio-player-" + currentPlayingMusic);
                if (audioElement) {
                    audioElement.pause();
                }
            }
            setCurrentPlayingMusic(musicToPlay);
        }
    };

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));
    }, []); 

    return (
        <body className="App-body">
            {data.map((musicData) => (
                <MusicDisplay
                    key={musicData.id}
                    imageUrl={musicData.imageUrl}
                    title={musicData.title}
                    author={musicData.author}
                    musicToPlay={musicData.id}
                    onPlay={handlePlay}
                    isPlaying={currentPlayingMusic === musicData.id}
                />
            ))}
        </body>
    );
}

export default Body;
