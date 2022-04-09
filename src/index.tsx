import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './components/ErrorBoundary';
import Template from './components/Template';

ReactDOM.render(
    (
    <React.StrictMode>
        <ErrorBoundary>
            <Template>
                <div>Hello World</div>
            </Template>
        </ErrorBoundary>
    </React.StrictMode>
    ), document.getElementById("root"));
