import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getUserLang, getDefaultLang } from '../lang/language';

//routes
import Home from './Home';
import Order from './order/Order';

export default class Layout extends Component {

  constructor() {
    super();

    this.state = {
      userLang: getUserLang(),
      opened: false
    }

    this._openSelector = this._openSelector.bind(this);
    this._changLang = this._changLang.bind(this);
  }

  _openSelector() {
    const selector = document.querySelector('.lang-selector')
    if(!this.state.opened) 
      selector.style.display = "block"
    else {
      selector.style.animation = ".4s selector-close alternate";
      setTimeout(() => {
          selector.setAttribute('style', selector.getAttribute('style').replace(/animation: (.*)/g, ''))
          selector.style.display = "none"
      }, 3.6e2)
    }
    this.setState({
      opened: !this.state.opened
    })
  }

  _changLang = ({ target }) => {
    const selectedLang = target.getAttribute('lang')
    if (selectedLang === getDefaultLang())
      return
    if(localStorage['userLang'])
      localStorage['userLang'] = selectedLang


    this.setState({
      userLang: getUserLang()
    })
    
    window.location.reload();
  }

  render() {
    const { header, lang } = this.state.userLang,
      userLang = getDefaultLang()

    return (
      <div>
        <Router>
          <header>
            <nav>
              <ul>
                <li className="active">
                  <Link to="/">{header.home}</Link>
                </li>
                <li>
                  <Link to="/#about">{header.about}</Link>
                </li>
                <li>
                  <Link to="/#services">{header.services}</Link>
                </li>
                <li>
                  <Link to="/#portfolio">{header.portfolio}</Link>
                </li>
              </ul>
            </nav>

            <div id="lang">
              <div onClick={this._openSelector} className="selected-lang">
                <img src={require(`../assets/images/icons/lang/${userLang}.svg`).default} alt="Flag" />
                <span>{lang[userLang]}</span>
              </div>

              <ul className="lang-selector">
                <li lang="fr-FR" onClick={this._changLang} className={userLang === "fr-FR" ? 'selected' : ''}>
                  <img src={require('../assets/images/icons/lang/fr-FR.svg').default} alt="Flag" />
                  <span>{lang['fr-FR']}</span>
                </li>
                <li lang="en-EN" onClick={this._changLang} className={userLang === "en-EN" ? 'selected' : ''}>
                  <img src={require('../assets/images/icons/lang/en-EN.svg').default} alt="Flag" />
                  <span>{lang['en-EN']}</span>
                </li>
              </ul> 
            </div>
          </header>

          <main>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={450} classNames="fade">
                        <Switch location={location}>
                          <Route exact path="/" component={Home} />
                          <Route path="/order" component={Order} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
          </main>
        </Router>

        <footer>
          &copy; Mattéo
        </footer>
      </div>
    );
  }

}