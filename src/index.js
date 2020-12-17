import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { Provider } from "react-redux";
import carReducer from "./store/reducer/car";
import authReducer from "./store/reducer/auth";
import thunk from "redux-thunk";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({
  carReducer: carReducer,
  authReducer: authReducer,
});
const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
