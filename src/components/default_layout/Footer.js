import '../../css/Footer.css';
import logoPause2 from '../../media/img/Pause2.png';
import play2 from '../../media/img/buttonPlay2.png';
import progressBar from '../../media/img/progress-bar-empty.png';
function Footer(){
    return      (
    <footer className="App-footer">
        <div id="icon-play-pause"><img src={logoPause2} className='ButtonPauseIcon2' alt='bouton pause'/></div>
        <div id='musiqueFooter'>
            <p>0:00</p><img src={progressBar} className='Progress-Bar' alt='bouton pause' /><p>3:00</p>
        </div>
    </footer>
    );
}

export default Footer