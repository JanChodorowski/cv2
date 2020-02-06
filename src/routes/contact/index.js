import { h } from 'preact';
import Plane from '../../../assets/images/contact.png';
import Location from '../../../assets/images/location.svg';
import Mobile from '../../../assets/images/mobile.svg';
import Mail from '../../../assets/images/mail.svg';

import './style.css';

const contact = () => {
  return (
    <div className='contact'>
      <div className='top-section'>
        <img src={Plane} className='plane' />
        <span className='heading'>Jan Chodorowski</span>
      </div>
      <div className='contact__items'>
        <div>
          <div className='icon'>
            <img src={Mobile} />
          </div>
        </div>
        <div>+48 721-219-937</div>

        <div>
          <div className='icon'>
            <img src={Mail} />
          </div>
        </div>

        <div>chodorowski.j@gmail.com</div>

        <div>
          <div className='icon'>
            <img src={Location} />
          </div>
        </div>
        <div>
          <p>ul. Nefrytowa 52</p>
          <p>Wrocław</p>
        </div>
      </div>
      <div className='bottom-section' />
    </div>
  );
};

export default contact;
