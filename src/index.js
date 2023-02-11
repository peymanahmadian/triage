import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from "antd";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//import component
const bindSaga = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
const sageMiddleware = createSagaMiddleware();
const store = createStore(combine, composeWithDevTools(applyMiddleware(sageMiddleware)))
bindSaga(sageMiddleware);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      cacheTime: 60 * 1000 * 10,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider direction={"rtl"} locale={faIR}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
//comments