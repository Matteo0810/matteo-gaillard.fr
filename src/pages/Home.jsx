import { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { getUserLang } from '../lang/language';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userLang: getUserLang()
    }
  }

  componentDidMount() {
    this._parallaxAnimation = this._parallaxAnimation.bind(this);

    window.addEventListener('scroll', this._parallaxAnimation)
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

  _parallaxAnimation() {
    const { scrollY } = window
    try {
        let titleH1 = document.getElementById('animation-title-h1'),
            titleH4 = document.getElementById('animation-title-h4')

        titleH1.style.fontSize = `${120 + (scrollY*0.10)}px`;
        titleH4.style.fontSize = `${40 + (scrollY*0.05)}px`;
    } catch(error) {
        return
    }
  }

  render() {
    const { home } = this.state.userLang;

    return (
        <section>
            <section className="home-top">
                <div className="top">
                    <div className="right">
                        <h1 id="animation-title-h1">{home.top.title_h1}</h1>
                        <h4 id="animation-title-h4">{home.top.title_h4}</h4>
                    </div>
                    <div className="left" />
                </div>
                <div className="bottom">
                    <div className="scroll-down">
                        <div className="mouse">
                            <div className="button" />
                        </div>
                        <p>{home.scrolldown}</p>
                    </div>
                    <a href={"https://github.com/Matteo0810"}><div className="icon-github" /></a>
                </div>
            </section>

            <section id="about" className="home-about">
                <div className="right">
                    <h1 className="home-title">{home.about.title}<span>.</span></h1>

                    <p>{home.about.description}</p>
                </div>
                <div className="left">
                    <ul>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"nodejs"} src={require('../assets/images/icons/node-js.svg').default} alt="language" />
                            <div className="brand" brandOf={"nodejs"}>
                                <h1>NodeJS</h1>
                                <p>{home.skills.nodejs[0]}</p>
                                <p>{home.skills.nodejs[1]}</p>
                                <ul>
                                    {home.skills.nodejs[2].map((framework, _) => {
                                        return <li className="nodejs-theme">{framework}</li> 
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"css"} src={require('../assets/images/icons/css.svg').default} alt="language" />
                            <div className="brand" brandOf={"css"}>
                                <h1>CSS</h1>
                                <p>{home.skills.css[0]}</p>
                                <ul>
                                    {home.skills.css[1].map((framework, _) => {
                                        return <li className="css-theme">{framework}</li> 
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"html"} src={require('../assets/images/icons/html.svg').default} alt="language" />
                            <div className="brand" brandOf={"html"}>
                                <h1>HTML</h1>
                                <p>{home.skills.html[0]}</p>
                                <p>{home.skills.html[1]} <span className="html-pourcent">{home.skills.html[2]}</span></p>
                            </div>
                        </li>
                        <li>
                            <img onMouseOver={this._showBrand} onMouseOut={this._hideBrand} id={"js"} src={require('../assets/images/icons/javascript.svg').default} alt="language" />
                            <div className="brand" brandOf={"js"}>
                                <h1>Javascript</h1>
                                <p>{home.skills.javascript[0]}</p>
                                <p>{home.skills.javascript[1]}</p>
                                <p>{home.skills.javascript[2]} <span className="javascript-pourcent">{home.skills.javascript[3]}</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="services" className="services">
                <h1 className="home-title services-title">{home.services.title}<span>.</span></h1>

                <div className="services-list">
                    <div className="service">
                        <img src={require('../assets/images/icons/developing.svg').default} alt="Complete Website Icon" />
                        <h1>{home.services.complete_website.title}</h1>
                        {home.services.complete_website.description.map((line, _) => {
                            return <p>{line}</p>
                        })}

                        <Link to="/order">{home.services.see_more}</Link>
                    </div>
                    <div className="service">
                        <img src={require('../assets/images/icons/responsive.svg').default} alt="Complete Website Icon" />
                        <h1>{home.services.showcase_website.title}</h1>
                        {home.services.showcase_website.description.map((line, _) => {
                            return <p>{line}</p>
                        })}

                        <Link to="/order">{home.services.see_more}</Link>
                    </div>
                </div>
            </section>
        </section>
    );
  }

}