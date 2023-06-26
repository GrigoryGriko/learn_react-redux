import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import countReducer from './countReducer';
import userReducer from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(countWatcher)