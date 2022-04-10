import { all, takeEvery, select, put, call } from 'redux-saga/effects';
import * as actions from './actions';

function* onChangeLanguage() {
    yield;
}

export default function* handleRequestSaga() {
    yield all([
      takeEvery(actions.changeLanguage.TRIGGER, onChangeLanguage),
    ]);
  }