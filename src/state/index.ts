import { combineReducers } from "redux";

import preferences from "./preferences";
import settings from "./settings";

import * as actions from "./actions";
import { Action } from "redux-actions";
import createRootState from "./createRootState";

const reducers = {
  preferences,
  settings,
};

const sliceReducers = combineReducers(reducers);

const rootReducer = (state = createRootState(), action: Action<any>) => {
  switch (action.type) {
    case actions.restore.TRIGGER:
      state = {
        ...state,
        ...action.payload,
      };
      break;
    default:
      break;
  }
  return sliceReducers(state, action);
};

export default rootReducer;
