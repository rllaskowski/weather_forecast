import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {
    createStore,
    compose,
    applyMiddleware
} from "redux"
import { createEpicMiddleware } from "redux-observable";
import createReducer from "./reducer";
import { rootEpic } from "./epics";

const DEBUG = true;

let store, composeEnhancers;

const reducer = createReducer();

const epicMiddleware = createEpicMiddleware();

const middleware = applyMiddleware(epicMiddleware);

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

store = createStore(reducer, undefined, composeEnhancers(
    middleware
));

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
