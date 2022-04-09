import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
    (
    <React.StrictMode>
        <ErrorBoundary>
            <div>Hello World</div>
        </ErrorBoundary>
    </React.StrictMode>
    ), document.getElementById("root"));
