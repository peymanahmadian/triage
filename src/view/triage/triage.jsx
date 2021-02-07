import {Layout, Row,Col} from "antd";
import "../../assets/styles/triage.scss";
import SidebarTriage from "./sidebarTriage";
import {LeftOutlined,HeartOutlined,ColumnWidthOutlined} from "@ant-design/icons";
const Triage=(props)=>{
    return(<Layout className={"layout triage"}>
        <Layout className={"body"}>
            <Layout.Sider className={"side"}>
                <SidebarTriage/>
            </Layout.Sider>
            <Layout.Content className={"content"}>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"red"}><LeftOutlined /><span>سطح یک</span></legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"yellow"}><LeftOutlined /><span>سطح دوم</span></legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"gray"}><LeftOutlined /><span>سطوح بالاتر</span></legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"green"}><HeartOutlined  /><span>علائم حیاتی</span></legend>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"gray"}><ColumnWidthOutlined /><span>جداسازی</span></legend>
                        </fieldset>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </Layout>)
}
export default Triage;