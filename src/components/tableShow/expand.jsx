import {Row,Col} from "antd";
import {Info} from "../../components";
import ref from "./../../assets/images/icons/ref.svg";
import date from "./../../assets/images/icons/date.svg";
import nurse from "./../../assets/images/icons/nurse.svg";
const Expand=()=>{
    return(
        <>
            <Row gutter={[4,4]}>
                <Col xs={24} md={6}><Info title={"نام"} value={"پیمان احمدیان"} /></Col>
                <Col xs={24} md={{ span: 6, offset: 6 }}><Info title={"ارجاع به"} value={"پیمان احمدیان"} icon={ref}/></Col>
                <Col xs={24} md={6}><Info title={"تاریخ تریاژ"} value={"پیمان احمدیان"} icon={date}/></Col>
            </Row>
            <Row gutter={4}>
                <Col xs={24} md={{ span: 6, offset: 12 }}><Info title={"ارجاع از"} value={"پیمان احمدیان"} icon={ref}/></Col>
                <Col xs={24} md={6}><Info title={"تریاژ کننده"} value={"پیمان احمدیان"} icon={nurse}/></Col>
            </Row>
        </>
    )
}
export default Expand;