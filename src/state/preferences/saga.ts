import { all, takeEvery, select, put, call } from 'redux-saga/effects';
import * as actions from './actions';

function* onToggleDarkMode() {
    yield;
}

export default function* handleRequestSaga() {
    yield all([
      takeEvery(actions.toggleDarkMode.TRIGGER, onToggleDarkMode),
    ]);
  }