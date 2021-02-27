//libs
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Layout,notification} from "antd";
import Login from "./layout/login";
import {getInformation} from "./../actions/account.action";
//import global antd css
import "antd/dist/antd.css";
//init global css
import "../assets/styles/global.scss";
//import component
//@todo create golbal reducer for authentication
import Wrapper from "./layout/wrapper";
import ErrorBoundary from "./error/errorBoundary";
import Navbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
import Triage from "./triage/triage";
const App=()=> {
    const dispatch=useDispatch();
    const {blur,open,message}=useSelector(state=>state.Visual);
    const {valid}=useSelector(state=>state.Account);
    const { Header, Sider, Content } = Layout;
    //check message show
    useEffect(()=>{
        if(message.show){
            notification.error({
                message: 'خطا',
                description:message.content
            });
        }
    },[message])
    //check token
    useEffect(()=>{
        if(valid){
            dispatch(getInformation());
        }
    },[dispatch,valid])
    return (
        <ErrorBoundary>
            {
                valid?
                    <>
                        <Layout className={"layout"}>
                            <Header className={`header ${blur&&"blur"}`}>
                                <Navbar/>
                            </Header>
                            <Layout className={"body"}>
                                <Sider className={`side ${blur&&"blur"}`}>
                                    <Sidebar/>
                                </Sider>
                                <Content className={"content"}>
                                    <Wrapper/>
                                </Content>
                            </Layout>
                        </Layout>
                        <div className={`floatWindow ${open && `show`}`}>
                            {open && <Triage/>}
                        </div>
                    </>
                    :
                    <Login/>
            }

        </ErrorBoundary>
    );
}
export default App;
