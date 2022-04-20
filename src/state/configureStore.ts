/* eslint-env node */
import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./index";
import rootSaga from "./saga";

const initialHydratedState = undefined;

const sagaMiddleware = reduxSaga();

const enhance = applyMiddleware(reduxThunk, sagaMiddleware);
const composed = composeWithDevTools({})(enhance);

const configureStore = () => {
  const store = createStore(rootReducer, initialHydratedState, composed);

  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept("./index", () => {
      const reducers = require("./index").default;
      store.replaceReducer(reducers);
    });
  }

  sagaMiddleware.run(rootSaga);

  return { store };
};

export default configureStore;