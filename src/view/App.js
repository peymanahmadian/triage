//libs
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, notification } from "antd";


import Login from "./layout/login";
import { getInformation, valid as validAction } from "./../actions/account.action";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import global antd css
import "antd/dist/antd.css";
//init global css
import "../assets/styles/global.scss";
//import component
//import pages
import Home from "./home/Home";
//@todo create golbal reducer for authentication
import Wrapper from "./layout/wrapper";
import ErrorBoundary from "./error/errorBoundary";
import Navbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
import Triage from "./triage/triage";
//
import Print from "./print/print";
import { Loading } from "../components";
const App = () => {
    const dispatch = useDispatch();

    const { blur, open, message, loading } = useSelector(state => state.Visual);
    const { valid } = useSelector(state => state.Account);
    const { Header, Sider, Content } = Layout;
    const [triageID, setTriageID] = useState("3405241");
    //check token
    useEffect(() => {
        if (localStorage.getItem("triageToken")) {
            dispatch(validAction(true))
        }
    }, [dispatch])
    //check message show
    useEffect(() => {
        if (message.show) {
            notification.info({
                description: message.content
            });
        }
    }, [message])
    //check token
    useEffect(() => {
        if (valid) {
            dispatch(getInformation());
        }
    }, [dispatch, valid]);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                {loading && <Loading />}

                {
                    valid ?
                        <Layout className="layout">
                            <Header className={`header ${blur && "blur"}`}>
                                <Navbar />
                            </Header>
                            <Layout className={"body"}>
                                <Sider className={`side ${blur && "blur"}`}>
                                    <Sidebar />
                                </Sider>
                                <Content className={"content"}>
                                    <Switch>
                                        <Route path={"/"} exact>
                                            <Home />
                                        </Route>
                                        <Route path={"/triage"} exact>
                                            <Triage />
                                        </Route>
                                        <Route path={"/print/:id"} exact>
                                            <Print />
                                        </Route>
                                    </Switch>
                                </Content>
                            </Layout>


                        </Layout>

                        :
                        <Login />
                }

            </BrowserRouter>



        </ErrorBoundary>
    );
}
export default App;
