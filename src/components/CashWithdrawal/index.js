import {Component} from 'react'
import DenominationItem from '../DenominationItem' //Importing <DenominationItem/> Component

import './index.css'

class CashWithdrawal extends Component{
  // Some of initial balance in the state to modifying state value.  
  state={
        balance:2000, 
    }

    //Update the balance 
    updateBalance = value => {
        this.setState(prevState => {
          const newBalance = prevState.balance - value
          // If initial balance goes equal to zero(0) than stop showing negative balance.
          if (newBalance >= 0) {
            return {balance: newBalance} // State update with new balance.
          }
          return null // No state value change.
        })
      }

    render() {
        const {denominationsList} = this.props //get's the denominationsList from App.js
        const {balance} = this.state // get's the state balance
        const name = 'Sarah Willaims'
        const initial = name.slice(0, 1)
    
        return (
          <div className="app-container">
            <div className="cash-withdrawal-container">
              <div className="user-details-container">
                <div className="initial-container">
                  <p className="initial">{initial}</p>
                </div>
                <p className="name">{name}</p>
              </div>
              <div className="balance-container">
                <p className="your-balance">Your Balance</p>
                <p className="balance">
                  {balance} <br />
                  <span className="currency">In Rupees</span>
                </p>
              </div>
              <p className="withdraw">Withdraw</p>
              <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
              <ul className="denominations-list">     
                {denominationsList.map(eachDenomination => (        //mapping on each denomination
                    <DenominationItem 
                    key={eachDenomination.id} 
                    denominationDetails={eachDenomination} 
                    updateBalance={this.updateBalance}
                    />
                ))}
              </ul>
            </div>
          </div>
        )
      }
    }

export default CashWithdrawal;