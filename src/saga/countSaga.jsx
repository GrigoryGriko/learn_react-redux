import { put, takeEvery } from 'redux-saga/effects';
import { ASYNC_INCREMENT, INCREMENT, incrementCreator } from '../store/countReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(incrementCreator())
}

function* decrementWorker() {

}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
}