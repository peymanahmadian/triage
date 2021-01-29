import {Row, Col,Select, Input, Checkbox,Button} from "antd";
import DatePicker from "react-datepicker2";
import {SearchOutlined } from "@ant-design/icons";
import "./filterBox.scss";
const FilterBox=()=>{
    return(<Row className={"filterBox"}>
        <Col xs={24} md={20} lg={22}>
            <Row gutter={[4,4]}>
                <Col xs={12} md={6}><Input size={"large"} placeholder={"نام بیمار"}/></Col>
                <Col xs={12} md={6}><Input size={"large"} placeholder={"نام خانوادگی بیمار"}/></Col>
                <Col xs={12} md={6}><Input size={"large"} placeholder={"کد تریاژ"}/></Col>
                <Col xs={12} md={6}>
                    <Select size={"large"} className={"full"} placeholder={"نوع تریاژ"}>
                        <Select.Option>مثال</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[4,4]}>
                {/*<Col xs={12} md={6}><Input size={"large"} placeholder={"تاریخ"}/></Col>*/}
                <Col xs={12} md={6}>
                    <DatePicker timePicker={false}  className={"full datepicker"} inputFormat={"YYYY-MM-DD"} placeholder={"تاریخ"} isGregorian={false}/>
                </Col>
                <Col xs={12} md={6}>
                    <Select size={"large"} className={"full"} placeholder={"مکان ارجاع"}>
                        <Select.Option>مثال</Select.Option>
                    </Select>
                </Col>
                <Col xs={12} md={6} className={"paddingTop"}><Checkbox>نمایش همه بیماران</Checkbox></Col>
                <Col xs={12} md={6} className={"paddingTop"}><Checkbox>پذیرش شده</Checkbox></Col>
            </Row>
        </Col>
        <Col xs={24} md={4} lg={2} className={"buttonSearch"}>
            <Button type="primary" icon={<SearchOutlined />} size={"large"} />

        </Col>
    </Row>)
}
export default FilterBox;