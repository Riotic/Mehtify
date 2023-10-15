import '../css/MusicDisplay.css';

import playButton from '../media/img/buttonPlay.png';
import pauseButton from '../media/img/Pause1.png';
import React, { useState, useRef } from 'react';

function MusicDisplay({ imageUrl, title, author, musicToPlay, onPlay, isPlaying }) {
  const audioRef = useRef(null);
  const [localIsPlaying, setLocalIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay(musicToPlay);
    }

    if (audioRef.current) {
      if (localIsPlaying) {
        audioRef.current.pause();
      } else {

        const allAudioElements = document.querySelectorAll(".audio-player");
        allAudioElements.forEach((element) => {
          if (element !== audioRef.current) {
            element.pause();
            
            if(element.parentElement.getElementsByClassName('ButtonPauseIcon')[0]){
            
                element.parentElement.getElementsByClassName('ButtonPauseIcon')[0].src = playButton;
                element.parentElement.getElementsByClassName('ButtonPauseIcon')[0].alt = "button play";
                element.parentElement.getElementsByClassName('ButtonPauseIcon')[0].className = "ButtonPlayIcon";
            }
            
          }
        });
        audioRef.current.play();
      }
      setLocalIsPlaying(!localIsPlaying); 
    }
  };

  return (
    <>
      <section className="App-musicDisplay">
        <img src={imageUrl} className='App-logoSong' alt="logo header" />
        <p>{title}</p>
        <p>{author}</p>
        <p>DURATION</p>
        <button onClick={handlePlayClick} className="ButtonPlay">
          {localIsPlaying ? <img src={pauseButton} className='ButtonPauseIcon' alt="button pause" /> : <img src={playButton} className='ButtonPlayIcon' alt="button play" />}
        </button>
        <audio ref={audioRef} className="audio-player">
          <source src={require(`../media/musiques/${musicToPlay}.mp3`)} type="audio/mpeg" />
        </audio>
      </section>
    </>
  );
}

export default MusicDisplay;
