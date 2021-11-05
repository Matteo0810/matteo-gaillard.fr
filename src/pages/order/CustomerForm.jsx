import { Component } from 'react';

import { getUserLang } from '../../lang/language';
import { Customer } from './OrderData';

export default class Step extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userLang: getUserLang()
    }
  }

  render() {
    if(this.props.isProfessional != null) {
      return (
        <div>
          <div className="item">
            <input name="surname" placeholder="Votre nom" />
            <input name="name" placeholder="Votre prénom" />
          </div>

          {String(this.props.isProfessional)}
          {this.props.isProfessional ?
            <div className="entreprise">
              <div className="item">
                <input name="entreprise-name" placeholder="Nom" />
                <input name="entreprise-location" placeholder="Location" />
              </div>
              <div className="item">
                <input name="entreprise-siret" placeholder="Numéro SIRET" />
              </div>
            </div> : 
            <div>
              <div className="item">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" placeholder="Votre email" />
              </div>
              <div className="item">
                <label htmlFor="phone">Téléphone</label>
                <input name="phone" id="phone" placeholder="Votre numéro" />
              </div>
            </div>
          }
        </div>
      )
    }
    return (<div />)
  }

}