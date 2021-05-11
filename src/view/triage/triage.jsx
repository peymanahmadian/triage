import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Layout, Row, Col, Radio, Checkbox, Slider, Input, Select,Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import "../../assets/styles/triage.scss";
import SidebarTriage from "./sidebarTriage";
import account from "./../../assets/images/icons/AccountInfo.svg";
import general from "./../../assets/images/icons/general.svg";
import complain from "./../../assets/images/icons/complain.svg";
import drug from "./../../assets/images/icons/drug.svg";
import {LeftOutlined,HeartOutlined,ColumnWidthOutlined} from "@ant-design/icons";
import {Button,Combo} from "../../components";
//action
import {init,fillTriage} from "../../actions/triage.action";

const Triage=(props)=>{
    const dispatch=useDispatch();
    const {information}=useSelector(state=>state.Account);
    useEffect(()=>{
        debugger;
        if(information){
            dispatch(init({
                "IsInitialize": false,
                "BranchId": information.BranchId,
                "UserId": information.UserId, 
                "EncounterId": 0, 
                "TriageId": 0, 
                "LocationIdSubmit": null, 
                "LocationIdDone": null, 
                "TriageDto": null, 
                "FieldExaminationEncounterHeaderId": null, 
                "MachineName": "", 
                "IsNotCompress": true
              }));
            dispatch(fillTriage());
        }
    },[information]);
    return(<Layout className={"layout triage"}>
        <Layout className={"body"}>
            <Layout.Sider className={"side"}>
                <SidebarTriage/>
            </Layout.Sider>
            <Layout.Content className={"content"}>
                <Row className={"headerTriage"} gutter={[4,4]}>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>کدتریاژ</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>نام بیمار</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>سطح تریاژ</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>ارجاع به</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>تاریخ مراجعه</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>علت مراجعه</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>نحوه ورود</b></div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className={"showText"}><span></span><b>تریاژ کننده</b></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend>
                                <img src={account} height={32} alt={"اطلاعات فردی"}/><div>اطلاعات فردی</div>
                            </legend>
                            <Row gutter={[6,4]}>
                                <Col xs={12} md={3} className={"paddingTop"}>
                                    <Checkbox>فاقد هویت</Checkbox>
                                </Col>
                                <Col xs={12} md={3}>
                                    <Select size={"large"} className={"full"} placeholder={"جنسیت"}>
                                        <Select.Option value={1}>مرد</Select.Option>
                                        <Select.Option value={2}>زن</Select.Option>
                                    </Select>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"نام"}/>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Input size={"large"} placeholder={"نام خانوادگی"}/>
                                </Col>
                                <Col xs={24} md={2}>
                                    <Input type={"number"} size={"large"} placeholder={"سن"}/>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"کد ملی"}/>
                                </Col>
                            </Row>
                            <Row gutter={[6,4]}>
                                <Col xs={12} md={6}>
                                    <Upload block>
                                        <Button><UploadOutlined />  بارگذاری تصویر  </Button>
                                    </Upload>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"تلفن"}/>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Input size={"large"} placeholder={"نام پدر"}/>
                                </Col>
                                <Col xs={24} md={2}>
                                    <Input type={"number"} size={"large"} placeholder={"وزن"}/>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"شغل"}/>
                                </Col>
                            </Row>
                            <Row gutter={[6,4]}>
                                <Col xs={24} md={17}>
                                    <Input type={"text"} size={"large"} placeholder={"آدرس"}/>
                                </Col>
                                <Col xs={24} md={2} className={"paddingTop"}>
                                    <Checkbox>باردار</Checkbox>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"تلفن"}/>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend>
                                <img src={general} height={32} alt={"عمومی"}/><div>عمومی</div>
                            </legend>
                            <Row gutter={[6,4]}>
                                <Col xs={12} md={7}>
                                    <Input size={"large"} placeholder={"علت مراجعه"}/>
                                </Col>
                                <Col xs={12} md={7}>
                                    <Input size={"large"} placeholder={"نحوه ورود"}/>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"نحوه مراجعه"}/>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Input size={"large"} placeholder={"کد آمبولانس"}/>
                                </Col>
                                <Col xs={24} md={16}>
                                    <div className={"grayTitle"}>
                                        <div className={"grayHead"}>مراجعه در 24 گذشته</div>
                                        <div className={"grayContent"}>
                                            <Radio.Group onChange={()=>{}} value={1}>
                                                <Radio value={2}>ندارد</Radio>
                                                <Radio value={3}>همین بیمارستان</Radio>
                                                <Radio value={4}>بیمارستان</Radio>

                                            </Radio.Group>
                                        </div>

                                    </div>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Input size={"large"} placeholder={"نام بیمارستان"}/>
                                </Col>
                            </Row>
                            <Row gutter={[6,4]}>
                                <Col xs={24} md={6}>
                                    <Input size={"large"} placeholder={"ارجاع درمانگاه"}/>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Input size={"large"} placeholder={"از"}/>
                                </Col>0
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend>
                                <img src={complain} height={32} alt={"شکایت اصلی"}/><div>شکایت اصلی</div>
                            </legend>
                            <Row gutter={[6,4]}>
                                <Col xs={24} md={12}>
                                    <Input size={"large"} placeholder={"عنوان"}/>
                                    <Input size={"large"} placeholder={"شرح"} className={"marginTop"}/>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input.TextArea rows={3} size={"large"} placeholder={""}/>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend>
                                <img src={drug} height={32} alt={"سابقه حساسیت دارویی"}/><div>سابقه حساسیت دارویی</div>
                            </legend>
                            <Row gutter={[6,4]}>
                                <Col xs={24} md={12}>
                                    <Checkbox>سابقه حساسیت دارویی</Checkbox>
                                    <Input size={"large"} placeholder={"نام دارو"} className={"marginTop"}/>
                                    <Button color={"blue"} className={"marginTop"}>لیست داروها</Button>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input.TextArea rows={4} size={"large"} placeholder={""}/>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
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
                            <legend className={"gray"}><LeftOutlined /><span>سطوح بالاتر</span></legend>
                            <Row gutter={[12,6]}>
                                <Col xs={24} sm={24} md={24} lg={16}>
                                    <div className={"grayTitle"}>
                                        <div className={"grayHead"}>تعداد تسهیلات</div>
                                        <div className={"grayContent"}>
                                            <Radio.Group onChange={()=>{}} value={1}>
                                                <Radio value={1}>سطح سوم - دو مورد یا بیشتر</Radio>
                                                <Radio value={2}>سطح چهارم - یک مورد بیشتر</Radio>
                                                <Radio value={3}>سطح پنجم - هیچ</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8}>
                                    <div className={"flexInput"}>
                                        <Input
                                            prefix={<span className={"grayText"}> سطح تریاژ:</span>}
                                        />
                                        <Button color={"green"}>نظر پزشک</Button>
                                    </div>

                                </Col>
                            </Row>
                        </fieldset>
                    </Col>

                </Row>
                <Row>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"green"}><HeartOutlined  /><span>علائم حیاتی</span></legend>
                            <Row>
                                <Col xs={24} md={4}>
                                    <Button color={"red"}>نرمال</Button>
                                </Col>
                                <Col xs={24} md={20}>
                                    <Row>
                                        <Col xs={12} md={4}> <Combo label={"BPS"}/></Col>
                                        <Col xs={12} md={4}> <Combo label={"BPD"}/></Col>
                                        <Col xs={12} md={4}> <Combo label={"PR"}/></Col>
                                        <Col xs={12} md={4}> <Combo label={"RR"}/></Col>
                                        <Col xs={12} md={4}> <Combo label={"T"}/></Col>
                                        <Col xs={12} md={4}> <Combo label={"SPO2"}/></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </fieldset>

                    </Col>
                </Row>
                <Row  className={"paddingBottom"}>
                    <Col xs={24} md={24}>
                        <fieldset>
                            <legend className={"gray"}><ColumnWidthOutlined /><span>جداسازی</span></legend>
                            <Row gutter={[12,6]}>
                                <Col xs={24} sm={24} md={24} lg={18}>
                                    <div className={"grayTitle"}>
                                        <div className={"grayHead"}>جدا سازی و احتیاط بیشتر کنترل عفونت</div>
                                        <div className={"grayContent"}>
                                            <Radio.Group onChange={()=>{}} value={1}>
                                                <Radio value={1}>نیاز ندارد</Radio>
                                                <Radio value={2}>تماسی</Radio>
                                                <Radio value={3}>قطره ای</Radio>
                                                <Radio value={4}>تنفسی</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6}>
                                    <div className={"flexInput"}>
                                        <Input
                                            prefix={<span className={"grayText"}> کد بیمار در HIS:</span>}
                                        />
                                    </div>

                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={8}>
                        <div className={"flexInput"}>
                            <Input
                                prefix={<span className={"grayText"}> نحوه خروج و انصراف از درمان:</span>}
                            />
                            <Button>ثبت</Button>
                        </div>
                    </Col>
                    <Col xs={24} md={16}>
                        <div className={"flexInput"}>
                            <Input
                                prefix={<span className={"grayText"}> ارجاع به:</span>}
                            />
                            <Input
                                prefix={<span className={"grayText"}> زمان و تاریخ تریاژ:</span>}
                            />
                            <Button color={"red"}>ثبت</Button>
                        </div>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </Layout>)
}
export default Triage;