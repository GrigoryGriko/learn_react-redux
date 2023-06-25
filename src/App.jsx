import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customersReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  const addCash = (cash) => {
    cash = isNaN(cash) ? 0 : cash;

    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    cash = isNaN(cash) ? 0 : cash;
    
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: `${Date.now()}x${Math.floor(Math.random() * 1000)}`,
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <h1 style={{fontSize: "3rem"}}>
        {cash}
      </h1>

      <div style={{display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div 
              style={{
                fontSize: "2rem", 
                border: "1px solid #000", 
                padding: "5px", 
                marginTop: "10px", 
                cursor: "pointer"
              }}
              onClick={
                () => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          )}
        </div>  
        :
        <div style={{fontSize:"2rem", marginTop:20}}>
          Клиенты отсутсвуют.
        </div>
    }
    </div>
  );
}

export default App;
