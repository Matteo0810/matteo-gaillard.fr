import { Component } from 'react';

import Step from './Step';
import { OrderData, Customer, WebsiteTypes } from './OrderData';
import { getUserLang } from '../../lang/language';

export default class Order extends Component {

  constructor(props) {
    super(props)

    const customer = new Customer("Mattéo", "Gaillard", "15555555555555")
    const orderData = new OrderData(
      WebsiteTypes.COMPLETE_WEBSITE,
      customer,
      1
    )
    this.state = {
      userLang: getUserLang(),
      orderData: orderData
    }

    this._previous = this._previous.bind(this)
    this._next = this._next.bind(this)
  }

  _previous() {
    this.setState({
      orderData: this.state.orderData.previousStep()
    })
  }

  _next() {
    this.setState({
      orderData: this.state.orderData.nextStep()
    })
  }

  _order() {
    console.log('YEAH!')
  }

  render() {
    return (
        <div className="order-wrapper">
            <section className="right">
              
            </section>
            <section className="left">
              <Step data={this.state.orderData} />

              <div className="actions">
                <button onClick={this._previous}>Précédent</button>
                {this.state.orderData.isMaxStep() ?
                  <button onClick={this._order}>Commander</button> :
                  <button onClick={this._next}>Suivant</button>
                }
              </div>
            </section>
        </div>
    );
  }

}