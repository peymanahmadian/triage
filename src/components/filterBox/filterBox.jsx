import {useState} from "react";
import {Row, Col,Select, Input, Checkbox,Button} from "antd";
import {useSelector} from "react-redux";
import moment from "moment-jalaali";
import DatePicker from "react-datepicker2";
import "./filterBox.scss";
const FilterBox=(props)=>{
    const [fromDate,setFromDate]=useState(null);
    const [toDate,setToDate]=useState(null);
    const {information}=useSelector(state=>state.Account);
    const onClear=()=>{
        setToDate(null);
        setFromDate(null);
        props.onSearch({
            "BranchId": information.BranchId,
            "LocationId": null,
            "TriageCode": 0,
            "TriageQuitId": 1,
            "FirstName": null,
            "LastName": null,
            "DateOf1": null,
            "DateOf2": null,
            "IsAnonymous": null,
            "IsPrint": null,
            "TriageTypeId": null,
            "IsNotCompress": true
        })
    }
    const onSearch=()=>{
        props.onSearch({
            "BranchId": information.BranchId,
            "LocationId": null,
            "TriageCode": 0,
            "TriageQuitId": 1,
            "FirstName": null,
            "LastName": null,
            "DateOf1": fromDate,
            "DateOf2": toDate,
            "IsAnonymous": null,
            "IsPrint": null,
            "TriageTypeId": null,
            "IsNotCompress": true
        })
    }

    return(<Row className={"filterBox"}>
        <Col xs={24} md={24} lg={24}>
            <Row gutter={[4,4]}>
                <Col xs={12} md={6}><Input disabled={true} size={"large"} placeholder={"نام بیمار"}/></Col>
                <Col xs={12} md={6}><Input disabled={true} size={"large"} placeholder={"نام خانوادگی بیمار"}/></Col>
                <Col xs={12} md={6}><Input disabled={true} size={"large"} placeholder={"کد تریاژ"}/></Col>
                <Col xs={12} md={6}>
                    <Select size={"large"} disabled={true} className={"full"} placeholder={"نوع تریاژ"}>
                        <Select.Option>مثال</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[4,4]}>
                <Col xs={12} md={6}>
                    <DatePicker timePicker={true}  onChange={e=>{debugger;let value=moment(e).format("YYYY-MM-DDTHH:mm:SS");setFromDate(value)}}  className={"full datepicker"} inputFormat={"YYYY-MM-DD"} placeholder={"از تاریخ"} isGregorian={false}/>
                </Col>
                <Col xs={12} md={6}>
                    <DatePicker timePicker={true}  onChange={e=>{setToDate(moment(e).format("YYYY-MM-DDTHH:mm:SS"))}}  className={"full datepicker"} inputFormat={"YYYY-MM-DD"} placeholder={"تا تاریخ"} isGregorian={false}/>
                </Col>
                {/*<Col xs={12} md={6}>*/}
                {/*    <Select size={"large"} className={"full"} placeholder={"مکان ارجاع"}>*/}
                {/*        <Select.Option>مثال</Select.Option>*/}
                {/*    </Select>*/}
                {/*</Col>*/}
                <Col xs={12} md={4} className={"paddingTop"}><Checkbox disabled={true}>پذیرش شده</Checkbox></Col>
                <Col xs={12} md={4} ><Button  block size={"large"} onClick={()=>onClear()}>نمایش همه</Button></Col>
                <Col xs={12} md={4} ><Button type="primary" block size={"large"} onClick={()=>onSearch()}>جستجو</Button></Col>

            </Row>
        </Col>
    </Row>)
}
export default FilterBox;