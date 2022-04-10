import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary';
import configureStore from './state/configureStore';
import Router from './components/Router';
const { store, persistor } = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <Router />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
