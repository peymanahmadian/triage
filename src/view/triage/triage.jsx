import {Layout} from "antd";
import "../../assets/styles/triage.scss";
const Triage=(props)=>{
    return(<Layout className={"layout triage"}>
        <Layout className={"body"}>
            <Layout.Sider className={"side"}>
                <input type={"button"} value={"close"} onClick={props.onEscape}/>
            </Layout.Sider>
            <Layout.Content className={"content"}>
            </Layout.Content>
        </Layout>
    </Layout>)
}
export default Triage;