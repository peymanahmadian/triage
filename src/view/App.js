//libs
import {Layout} from "antd";
//import global antd css
import "antd/dist/antd.css";
//init global css
import "../assets/styles/global.scss";
//import component
import Wrapper from "./layout/wrapper";
import ErrorBoundary from "./error/errorBoundary";
import Navbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
import {useSelector} from "react-redux";
import Triage from "./triage/triage";
const App=()=> {
    const {blur,open}=useSelector(state=>state.Visual);
    const { Header, Sider, Content } = Layout;
    return (
        <ErrorBoundary>
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
                <Triage/>
            </div>
        </ErrorBoundary>
    );
}
export default App;
