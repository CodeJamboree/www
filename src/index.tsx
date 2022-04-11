import React, {Suspense} from "react";
import * as ReactDOM from "react-dom/client";
import ErrorBoundary from './components/ErrorBoundary';
import Provider from './components/Provider';
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
            <Suspense fallback={<FallbackMessage message="Loading Provider"/>}>
                <Provider store={store}>
                    <Suspense fallback={<FallbackMessage message="Loading Router"/>}>
                        <Router />
                    </Suspense>
                </Provider>
            </Suspense>
        </ErrorBoundary>
    </React.StrictMode>
);
