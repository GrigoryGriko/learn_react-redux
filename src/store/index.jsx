import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools,
});