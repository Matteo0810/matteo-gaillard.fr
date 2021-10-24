import { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getUserLang } from '../lang/language';

//routes
import Home from './Home';

export default class Layout extends Component {

  constructor() {
    super();

    this.state = {
      //userLang: getUserLang(),
      opened: false
    }

    //this.handleLangDropdown = this.handleLangDropdown.bind(this);
    //this.changLang = this.changLang.bind(this);
  }

  componentDidMount() {
    this.parallaxAnimation = this.parallaxAnimation.bind(this);

    window.addEventListener('scroll', this.parallaxAnimation)
  }

  parallaxAnimation() {
    const { scrollY } = window
    let titleH1 = document.getElementById('animation-title-h1'),
        titleH4 = document.getElementById('animation-title-h4')

    titleH1.style.fontSize = `${120 + (scrollY*0.10)}px`;
    titleH4.style.fontSize = `${40 + (scrollY*0.05)}px`;
  }

  /*handleLangDropdown() {
    let arrow = document.querySelector('header>nav>ul>li#lang>.arrow>i');

    this.setState({ opened: !this.state.opened })

    if(!this.state.opened) arrow.classList.add('active');
    else arrow.classList.remove('active');

    document.getElementById('lang-nav').style.display = !this.state.opened ? "block" : "none";
  }

  changLang = ({ target }) => {
    if(localStorage['userLang'])
      localStorage['userLang'] = target.getAttribute('lang');

    this.setState({
      userLang: getUserLang()
    })
    
    window.location.reload();
  }*/

  render() {
    /*const { header, lang } = this.state.userLang,
      langName = lang[localStorage['userLang']],
      userLang = localStorage['userLang']*/

    return (
      <div>
        <Router>
          <header>
            <nav>
              <ul>
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </nav>

            <div id="lang">
              <img src={require('../assets/images/icons/uk.svg').default} alt="Flag" />
              <span>English</span>
            </div>
          </header>

          <main>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={450} classNames="fade">
                        <Switch location={location}>
                          <Route exact path="/" component={Home} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
          </main>
        </Router>

        <footer>
          &copy; Mattéo | <a href="https://github.com/Matteo0810">My github</a>
        </footer>
      </div>
    );
  }

}

/*<li id="lang" onClick={this.handleLangDropdown}>
  {langName} <span className="arrow"><i className="fas fa-chevron-up"></i></span>

  <nav id="lang-nav">
    <ul>
      <li lang="fr-FR" onClick={this.changLang}><img src={require('../assets/images/icons/france.svg').default} alt="Flag" /> {lang['fr-FR']} {userLang === "fr-FR" ? <span><i className="far fa-check-circle"></i></span> : ''}</li>
      <li lang="en-EN" onClick={this.changLang}><img src={require('../assets/images/icons/uk.svg').default} alt="Flag" /> {lang['en-EN']} {userLang === "en-EN" ? <span><i className="far fa-check-circle"></i></span> : ''}</li>
    </ul>
  </nav>
</li>*/
/*<Route exact path="/" component={Home} />*/