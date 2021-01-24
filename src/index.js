import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from "antd";
//import component
import App from './view/App';
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction={"rtl"}>
        <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
