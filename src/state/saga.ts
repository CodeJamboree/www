import { all, fork } from 'redux-saga/effects';
import settings from "./settings/saga";

function* saga() {
  yield all([
      fork(settings)
  ]);
}

export default saga;