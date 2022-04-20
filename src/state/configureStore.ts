/* eslint-env node */
import { configureStore } from "@reduxjs/toolkit";
import reduxSaga from "redux-saga";
import reduxThunk from "redux-thunk";

import reducer from "./index";
import rootSaga from "./saga";

const initialHydratedState = undefined;

const sagaMiddleware = reduxSaga();

const exportedConfigureStore = () => {
  const store = configureStore(
    {
      reducer,
      middleware: [reduxThunk, sagaMiddleware]
    }
  );

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

export default exportedConfigureStore;