//libs
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Layout} from "antd";
//import saga
import * as sagas from "../saga";
//reducers
import combine from "../reducers/combine";
//redux-saga
import createSagaMiddleware from "redux-saga";

//import global antd css
import "antd/dist/antd.css";
//init global css
import "../assets/styles/global.scss";
//init store for redux
//import component
import Wrapper from "./layout/wrapper";
import ErrorBoundary from "./error/errorBoundary";
import Navbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
const bindSaga=(sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
const sageMiddleware=createSagaMiddleware();
const store=createStore(combine,composeWithDevTools(applyMiddleware(sageMiddleware)))
bindSaga(sageMiddleware);

const App=()=> {
    const { Header, Sider, Content } = Layout;
    return (
    <Provider store={store}>
        <ErrorBoundary>
            <Layout className={"layout"}>
                    <Header className={"header"}>
                        <Navbar/>
                    </Header>
                    <Layout className={"body"}>
                            <Sider className={"side"}>
                                <Sidebar/>
                            </Sider>
                            <Content className={"content"}>
                                <Wrapper/>
                            </Content>
                    </Layout>
            </Layout>
        </ErrorBoundary>
    </Provider>
    );
}
export default App;
