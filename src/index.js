import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import rootReducer from "./reducers"
import thunkmiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import {Provider} from "react-redux"
import {createStore} from "redux"
import { applyMiddleware } from "redux";

const composedEnhanced=composeWithDevTools(applyMiddleware(thunkmiddleware))
const store=createStore(rootReducer,composedEnhanced)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
