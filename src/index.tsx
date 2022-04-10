import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary';
import Template from './components/Template';
import configureStore from './state/configureStore';

const { store, persistor } = configureStore();

ReactDOM.render(
    (
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <Template>
                    <div>Hello World</div>
                </Template>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
    ), document.getElementById("root"));
