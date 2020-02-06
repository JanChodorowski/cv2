import { h } from 'preact';
import './style.css';
import Carousel from '../../components/Carousel/Carousel';
import I18n from '../../i18n/settings';
import { Link } from 'preact-router/match';
import Avatar from '../../../assets/images/me.jpg';
import Avatar2 from '../../../assets/images/me2.jpg';

import Footer from '../../components/Footer/Footer';

import Graduation from '../../../assets/images/graduation.svg';
import Globe from '../../../assets/images/globe.svg';
import Monterail from '../../../assets/images/monterail.svg';
import JSLogo from '../../../assets/images/jsLogo.svg';
import Team from '../../../assets/images/team.svg';
import Tools from '../../../assets/images/tools.svg';

const Home = () => {
  const today = Date.now();
  const myBirthday = new Date(1992, 10, 9);
  const myAge = Math.floor((today - myBirthday) / (1000 * 60 * 60 * 24 * 365));

  return (
    <div className='home'>
      <div className='line-glyph' />
      <div className='greeting'>{I18n.t('greeting')}</div>
      <div
        className='greeting sub'
        dangerouslySetInnerHTML={{ __html: I18n.t('greetingSub') }}
      />
      <div className='line-glyph no-margin-bottom' />

      <div className='content'>
        <p className='p1'>{I18n.t('homeP1', { age: myAge })}</p>
        <div className='icon-div icon1'>
          <img src={Graduation} />
        </div>
        <p className='p2'>{I18n.t('homeP2')}</p>
        <div className='icon-div globe icon2'>
          <img src={Globe} />
        </div>

        <p className='p3'>{I18n.t('homeP3')}</p>

        <div className='icon-div icon3'>
          <img src={Monterail} />
        </div>
      </div>

      <Carousel />

      <div className='content'>
        <p className='p4'>{I18n.t('profileP2')}</p>
        <div className='icon4'>
          <div className='icon-div round'>
            <img className='js-icon' src={JSLogo} />
          </div>
        </div>

        <p className='p5'>{I18n.t('profileP3')}</p>

        <div className='icon-div icon5'>
          <img className='' src={Tools} />
        </div>
      </div>

      <div className='photo'>
        <div className='line-glyph white' />
        <div className='huge'>
          THE PERSON BEHIND <br /> MY SUCCESS
        </div>
        <div className='card'>
          <img src={Avatar} className='avatar' />
          <img src={Avatar2} className='avatar img-top' />
        </div>
        <div className='photo__subtitle'>Jan Chodorowski</div>
        <div className='photo__sub-subtitle'>Fullstack JS Developer</div>
      </div>

      <div className='content '>
        <p className='p1'>
          {I18n.t('profileP4')}{' '}
          <Link href='/contact'>
            <span style={{fontFamily: 'IndustryBold'}}>{I18n.t('contactMeLink')}</span>
          </Link>
        </p>
        <div className='icon-div icon1'>
          <img src={Team} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
