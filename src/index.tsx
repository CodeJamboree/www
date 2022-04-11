import React, {Suspense} from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary';
import FallbackMessage from './components/FallbackMessage';
import configureStore from './state/configureStore';
import Router from './containers/Router';
const { store, persistor } = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <Suspense fallback={<FallbackMessage message="Loading Router"/>}>
                    <Router />
                </Suspense>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
