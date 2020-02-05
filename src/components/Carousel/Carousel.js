import { h, Component } from 'preact';
import * as Chevron from '../../../assets/images/up-chevron.png';
import { CarouselItems } from './carouselItems';

import './style.css';

const SLIDE_CHANGE_TIMEOUT = 10000;

class Carousel extends Component {
  state = {
    currentItem: 0,
    hide: false
  };

  componentDidMount() {
    this.interval = setInterval(this.nextItem, SLIDE_CHANGE_TIMEOUT);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  preventFaterSlideChange = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.nextItem, SLIDE_CHANGE_TIMEOUT);
  };

  renderItem = item => (
    <div id='item' className='animate carousel__item'>
      <div className='testimonial'>
        <div
          className='testimonial__content'
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>

      <div className='author'>
        <img className='author__avatar' src={item.avatar} />
        <div className='author__details'>
          <strong>{item.name}</strong>, {item.position}, {item.company}
        </div>
      </div>
    </div>
  );

  nextItem = () => {
    document.getElementById('item').classList.add('hide');

    setTimeout(() => {
      this.preventFaterSlideChange();
      this.setState({
        currentItem: (this.state.currentItem + 1) % CarouselItems.length,
        hide: true
      });
      document.getElementById('item').classList.remove('hide');
    }, 250);
  };

  previousItem = () => {
    document.getElementById('item').classList.add('hide');

    setTimeout(() => {
      this.preventFaterSlideChange();
      this.setState({
        currentItem:
          this.state.currentItem - 1 < 0
            ? CarouselItems.length - 1
            : this.state.currentItem - 1
      });
      document.getElementById('item').classList.remove('hide');
    }, 250);
  };

  render(props, state) {
    return (
      <div className='carousel__wrapper'>
        <div className='carousel__carousel'>
          <img
            className='chevron chevron--left'
            src={Chevron}
            onClick={this.previousItem}
          />

          {this.renderItem(CarouselItems[state.currentItem], state.hide)}

          <img
            className='chevron chevron--right'
            src={Chevron}
            onClick={this.nextItem}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
