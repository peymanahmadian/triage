import {Layout, Row, Col, Radio, Checkbox,Slider,Input} from "antd";
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
                            <div className={"grayTitle"}>
                                <div className={"grayHead"}>سطح هوشیاری بیمار</div>
                                <div className={"grayContent"}>
                                    <Radio.Group onChange={()=>{}} value={1}>
                                        <Radio value={1}>A</Radio>
                                        <Radio value={2}>V</Radio>
                                        <Radio value={3}>P</Radio>
                                        <Radio value={4}>U</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <Row className={"container"}>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>مخاطره راه هوایی</Checkbox>
                                </Col>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>دیسترس تنفسی</Checkbox>
                                </Col>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>سیانوز</Checkbox>
                                </Col>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>علائم شوک</Checkbox>
                                </Col>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>SPO</Checkbox>
                                </Col>
                                <Col xs={24} sm={12} md={4}>
                                    <Checkbox>انتوباسیون</Checkbox>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"yellow"}><LeftOutlined /><span>سطح دوم</span></legend>
                            <div className={"grayTitle"}>
                                <div className={"grayHead"}>شرایط</div>
                                <div className={"grayContent"}>
                                    <Radio.Group onChange={()=>{}} value={1}>
                                        <Radio value={1}>پر خطر</Radio>
                                        <Radio value={2}>لتاژی و خواب آلودگی</Radio>
                                        <Radio value={3}>دیسترس شدید</Radio>
                                    </Radio.Group>
                                </div>
                            </div>

                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"gray"}><LeftOutlined /><span>سطوح بالاتر</span></legend>
                            <Row gutter={[12,12]}>
                                <Col xs={24} md={12}>
                                    <div className={"toolbar"}>
                                            <div className={"label"}>میزان درد</div>
                                            <Slider className={"bar"} defaultValue={30}  />
                                    </div>

                                </Col>
                                <Col xs={24} md={12}>
                                    <div className={"toolbar"}>
                                        <Input
                                            prefix={<span className={"grayText"}> میزان قند خون:</span>}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={[12,12]}>
                                <Col xs={24} md={12}>
                                    <label className={"paddingBottom"}>سابقه حساسیت دارویی</label>
                                    <Input.Search
                                        allowClear
                                        enterButton="لیست دارو"
                                        size="medium"
                                        onSearch={()=>{}}
                                    />
                                </Col>
                                <Col xs={24} md={12}>
                                    <label className={"paddingBottom"}>سابقه حساسیت دارویی</label>
                                    <Input/>
                                </Col>
                            </Row>
                            <Row gutter={[12,6]}>
                                <Col xs={24} md={12}>
                                    <Input.TextArea rows={4}/>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input.TextArea rows={4}/>
                                </Col>
                            </Row>
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