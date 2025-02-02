import './index.css'

const DenominationItem = props =>{
    const {denominationDetails,updateBalance} = props;  //Accessing props from <DenominationItem/> component
    const {value} = denominationDetails;    //Accessing value from denominationDetails

    const onClickDenomination = () => {
        updateBalance(value)    //Balance will update by value
      }

    return (
        <li className='denomination-item'>
            <button 
                type='button' 
                className='denomination-button'
                onClick={onClickDenomination}
            >
                {value}
            </button>
        </li>
    )
}

export default DenominationItem;