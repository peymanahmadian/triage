import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from "antd";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
//import IR loc
import faIR from "antd/lib/locale/fa_IR";
//import saga
import * as sagas from "./saga";
//reducers
import combine from "./reducers/combine.js";
//redux-saga
import createSagaMiddleware from "redux-saga";
//import component
import App from './view/App';
//import component
const bindSaga=(sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
const sageMiddleware=createSagaMiddleware();
const store=createStore(combine,composeWithDevTools(applyMiddleware(sageMiddleware)))
bindSaga(sageMiddleware);
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction={"rtl"} locale={faIR}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//comments