import { h } from 'preact';
import './style.css';
import I18n from "../../i18n/settings";
import * as GithubLogo from '../../../assets/images/social-github.svg';

const alertNetworkMessage = () => {
  alert(I18n.t('alertNetworkMessage'));
};

const Footer = () => (
  <div className='footer__wrapper'>
    <a
      onClick={alertNetworkMessage}
      href='https://github.com/JanChodorowski/cv2'
    >
      <img className='footer__github' src={GithubLogo} />
    </a>
    <div className='footer__note'>
      COPYRIGHT © 1992-{new Date().getFullYear()} Jan Chodorowski
    </div>
  </div>
);
export default Footer;
