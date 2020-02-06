import { h } from 'preact';
import './style.css';
import Carousel from '../../components/Carousel/Carousel';
import I18n from '../../i18n/settings';
import Avatar from '../../../assets/images/me.jpg';

import Footer from '../../components/Footer/Footer';

import Graduation from '../../../assets/images/graduation.svg';
import Globe from '../../../assets/images/globe.svg';
import Computer from '../../../assets/images/computer.svg';
import Rise from '../../../assets/images/rise.svg';
import Monterail from '../../../assets/images/monterail.svg';

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
      <div className='line-glyph' />
      <Carousel />

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
          <img src={Computer} />
        </div>

        <p className='p4'>{I18n.t('homeP4')}</p>
        <div className='icon-div icon4'>
          <img src={Rise} />
        </div>
        <p className='p5'>{I18n.t('homeP5')}</p>
        <div className='icon-div monterail-logo icon5'>
          <img src={Monterail} />
        </div>
      </div>

      <div style={{ padding: '30px', background: '#1e1e1e' }}>
        <img className='avatar' src={Avatar} />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
