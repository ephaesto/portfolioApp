import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker/serviceWorker';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';

import App from './views/App';
import reducers from "./store/reducers";




const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
serviceWorker.unregister();
