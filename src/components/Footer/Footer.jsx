import './footer.css';
import facebook from '../../assets/social/facebook-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import appStore from '../../assets/store/app-store.svg'
import playStore from '../../assets/store/play-store.svg'
import winStore from '../../assets/store/windows-store.svg'

export default function Footer() {
  return (
    <footer className='separator'>
      <ul className='nav'>
        <li>Home</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Collection Statement</li>
        <li>Help</li>
        <li>Manage Account</li>
      </ul>
      <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className='icons-container'>
        <ul>
          <li><img className='social' src={facebook} alt="Facebook logo"/></li>
          <li><img className='social' src={twitter} alt="Twitter logo"/></li>
          <li><img className='social' src={instagram} alt="Instagram logo"/></li>
        </ul>
        <ul>
          <li><img src={appStore} alt="Apple Store logo"/></li>
          <li><img src={playStore} alt="Playstore logo"/></li>
          <li><img src={winStore} alt="Windows Store logo"/></li>
        </ul>
      </div>
    </footer>
  );
}
