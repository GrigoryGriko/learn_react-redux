import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCreator, decrementCreator, asyncIncrementCreator } from './store/countReducer';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.count)

  return (
    <div className="App">
      <h1 style={{fontSize: "3rem"}}>
        {count}
      </h1>

      <div style={{display: "flex"}}>
        <button onClick={() => dispatch(asyncIncrementCreator())}>Инкремент++</button>
        <button onClick={() => dispatch(decrementCreator())}>Декремент--</button>
        <button>Получить пользователей</button>
      </div>
        <div>
          
        </div>
    </div>
  );
}

export default App;

/*
  {users.map(user =>
    <div
      style={{
        fontSize: "2rem", 
        border: "1px solid #000", 
        padding: "5px", 
        marginTop: "10px", 
        cursor: "pointer"
      }}
    >
      {user.name}
    </div>
  )}
*/