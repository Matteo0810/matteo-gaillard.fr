import { Component } from 'react';

import { getUserLang } from '../lang/language';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      //userLang: getUserLang()
    }
  }

  _showBrand({ target }) {
      document.querySelector(`[brandOf=${target.id}]`).style.display = "block"
  }

  _hideBrand({ target }) {
      let brand = document.querySelector(`[brandOf=${target.id}]`)
      brand.style.animation = ".4s modal-close alternate";
      setTimeout(() => {
          brand.setAttribute('style', brand.getAttribute('style').replace(/animation: (.*)/g, ''))
          brand.style.display = "none"
      }, 3.6e2)
  }

  render() {
    //const { home } = this.state.userLang;

    return (
        <section>
            <section className="home-top">
                <div className="top">
                    <div className="right">
                        <h1 id="animation-title-h1">I'm Mattéo</h1>
                        <h4 id="animation-title-h4">Fullstack web developer</h4>
                    </div>
                    <div className="left">

                    </div>
                </div>
                <div className="bottom">
                    <div className="scroll-down">
                        <div className="mouse">
                            <div className="button" />
                        </div>
                        <p>scroll down</p>
                    </div>
                    <a href={"https://github.com/Matteo0810"}><div className="icon-github" /></a>
                </div>
            </section>

            <section className="home-about">
                <div className="right">
                    <h1 className="home-title">About me<span>.</span></h1>

                    <p>Lorem bidule</p>
                </div>
                <div className="left">
                    <ul>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"nodejs"} src={require('../assets/images/icons/node-js.svg').default} alt="language" />
                            <div className="brand" brandOf={"nodejs"}>
                                <h1>NodeJS</h1>
                                <p>This is how I realise my websites :-)</p>
                                <p>I use theses frameworks</p>
                                <ul>
                                    <li className="nodejs-theme">ReactJS</li>
                                    <li className="nodejs-theme">ExpressJS</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"css"} src={require('../assets/images/icons/css.svg').default} alt="language" />
                            <div className="brand" brandOf={"css"}>
                                <h1>CSS</h1>
                                <p>I also like using some popular preprocessor like</p>
                                <ul>
                                    <li className="css-theme">SCSS</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"html"} src={require('../assets/images/icons/html.svg').default} alt="language" />
                            <div className="brand" brandOf={"html"}>
                                <h1>HTML</h1>
                                <p>Well, if I have to rate my knowledge HTML</p>
                                <p>I will say <span className="html-pourcent">85%-90%</span></p>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"js"} src={require('../assets/images/icons/javascript.svg').default} alt="language" />
                            <div className="brand" brandOf={"js"}>
                                <h1>Javascript</h1>
                                <p>I love using javascript :-D</p>
                                <p>Well, if I have to rate my knowledge in Javascript</p>
                                <p>I will say <span className="javascript-pourcent">89%</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="services">
                <h1 className="home-title services-title">Services<span>.</span></h1>

                <div className="services-list">
                    <div className="service">
                        <img src={require('../assets/images/icons/developing.svg').default} alt="Complete Website Icon" />
                        <h1>Complete website</h1>
                        <p>i will create a complete</p>
                        <p>website juste for you</p>

                        <button>see more</button>
                    </div>
                    <div className="service">
                        <img src={require('../assets/images/icons/responsive.svg').default} alt="Complete Website Icon" />
                        <h1>Showcase website</h1>
                        <p>i will create a showcase</p>
                        <p>website juste for you</p>

                        <button>see more</button>
                    </div>
                </div>
            </section>
        </section>
    );
  }

}