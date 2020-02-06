import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Home from './routes/home';
import Contact from './routes/contact';

import I18n from './i18n/settings';

export default class App extends Component {
  state = {
    sideDrawer: false,
    locale: 'en'
  };

  localeChanged = locale => {
    this.setState({ locale }); //causes rerender
  };

  componentDidMount() {
    I18n.on('change', this.localeChanged);
  }

  openDrawer = open => {
    this.setState({ sideDrawer: open });
  };

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id='app'>
        <Toolbar
          drawerOpenClickHandler={() => this.openDrawer(true)}
          locale={this.state.locale}
        />

        <SideDrawer
          show={this.state.sideDrawer}
          closeSideDrawer={() => this.openDrawer(false)}
          locale={this.state.locale}
        />

        <Backdrop
          show={this.state.sideDrawer}
          locale={this.state.locale}
          clickHandler={() => this.openDrawer(false)}
        />

        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <Contact path='/contact' />
        </Router>
      </div>
    );
  }
}
