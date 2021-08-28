import {Row,Col} from "antd";
import {Info} from "../../components";
import ref from "./../../assets/images/icons/ref.svg";
import date from "./../../assets/images/icons/date.svg";
import nurse from "./../../assets/images/icons/nurse.svg";
const Expand=(props)=>{
    return(
        <>
            <Row gutter={[4,4]}>
                <Col xs={24} md={6}><Info title={"نحوه ورود"} value={props.record.TriageEntryMethodName} /></Col>
                <Col xs={24} md={6}><Info title={"ارجاع از"} value={null} icon={ref}/></Col>
                <Col xs={24} md={6}><Info title={"تاریخ تریاژ"} value={props.record.TriageDateShamsi} icon={date}/></Col>
                <Col xs={24} md={6}><Info title={"سن بیمار"} value={props.record.TriageEntryMethodName} /></Col>
            </Row>
            <Row gutter={4}>
                <Col xs={24} md={6}><Info title={"نحوه ارجاع"} value={props.record.TriageReferPattern_Name} /></Col>
                <Col xs={24} md={6}><Info title={"ارجاع به"} value={props.record.LocationName} icon={ref}/></Col>
                <Col xs={24} md={6}><Info title={"ساعت تریاژ"} value={props.record.TriageDateShamsiTime} icon={date}/></Col>
                <Col xs={24} md={6}><Info title={"تریاژ کننده"} value={props.record.FullName} icon={nurse}/></Col>
            </Row>
        </>
    )
}
export default Expand;