import {Row, Col,Select, Input, Checkbox,Button,DatePicker} from "antd";
import locale from 'antd/lib/locale/fa_IR';
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
                    <DatePicker className={"full"} size={"large"} locale={locale} />
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