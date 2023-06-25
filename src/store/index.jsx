import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [applyMiddleware(thunk)],
});

/*export const store = configureStore({
  reducer: rootReducer,
  enhancers: [composeWithDevTools(applyMiddleware(thunk))],
});*/