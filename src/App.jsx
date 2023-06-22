import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  
  const addCash = (cash) => {
    cash = isNaN(cash) ? 0 : cash;

    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    cash = isNaN(cash) ? 0 : cash;
    
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
      <h1 style={{fontSize: "3rem"}}>
        {cash}
      </h1>

      <div style={{display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
