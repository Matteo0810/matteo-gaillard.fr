import { Component } from 'react';

import { getUserLang } from '../../lang/language';
import { Steps } from './OrderData';

import CustomerForm from './CustomerForm';

export default class Step extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userLang: getUserLang(),
      isProfessional: null
    }

    this._changeCustomerState = this._changeCustomerState.bind(this)
  }

  _changeCustomerState({ target }) {
    this.setState({
      isProfessional: Boolean(target.id)
    })
    console.log(Boolean(target.id), this.state.isProfessional)
  }

  render() {
    const data = this.props.data
    switch(data.getStep()) {
      case Steps.BEGINNING:
        return (
          <div>
            <div className="indicator">
              <h1>{data.getType()}</h1>
              <span>{data.getStep()}/{data.getMaxStep()}</span>
            </div>
            <div className="form-wrapper">
              <h4>Tout d'abord, parlons de vous</h4>
              <div className="item">
                <h4>Je suis...</h4>
                <div onChange={this._changeCustomerState} className="boxes">
                  <div className="box">
                    <input type="radio" id="false" name="who" />
                    <label htmlFor="false">Particulier</label>
                  </div>
                  <div className="box">
                    <input type="radio" id="true" name="who" />
                    <label htmlFor="true">Professionnel</label>
                  </div>
                </div>
              </div>

              <CustomerForm isProfessional={this.state.isProfessional} />
            </div>
          </div>
        )
    }
  }

}

/*
<div className="item">
  <input name="surname" placeholder="Votre nom" />
  <input name="name" placeholder="Votre prénom" />
</div>

<div className="item">

</div>
*/