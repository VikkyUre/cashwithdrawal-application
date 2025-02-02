import CashWithdrawal from './components/CashWithdrawal'
import './App.css'

// Denomination List with values.
const denominationsList = [
  {
    id:1,
    value: 50
  },
  {
    id:2,
    value: 100
  },
  {
    id:3,
    value:200
  },
  {
    id:4,
    value:500
  }
]

const App = () => <CashWithdrawal denominationsList={denominationsList}/> //Passed denominationsList as a prop.

export default App