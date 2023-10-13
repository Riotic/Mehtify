import '../css/MusicDisplay.css';
import logoDefaultMusic from '../media/img/logoSongDefault.png';
import playButton from '../media/img/buttonPlay.png';
import pauseButton from '../media/img/Pause1.png';

function Button(pressed){
    if(pressed){
        return <button className='ButtonPlay, ButtonPauseIcon' ><img src={pauseButton}  alt="button Pause" /><img src={pauseButton}  alt="button Pause" /></button>
    }else{
        return <button className='ButtonPlay'><img src={playButton} className='ButtonPlayIcon' alt="button play" /></button>
    }
}

function MusicDisplay({imageUrl, title, author} ){
    const urlImage = imageUrl;
    return (   <>  
    <section className="App-musicDisplay">
        <img src={imageUrl} className='App-logoSong' alt="logo header" />
        <p>{title}</p>
        <p>{author}</p>
        <p>DURATION</p>
        {/* <Button
            pressed={false}
        /> */}
        <button className='ButtonPlay'><img src={playButton} className='ButtonPlayIcon' alt="button play" /></button>

    </section>

    </> 
    )
}

export default MusicDisplay