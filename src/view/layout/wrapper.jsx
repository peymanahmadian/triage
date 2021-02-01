import {Row,Col} from "antd";
import {useState} from "react";
import {FilterBox, TableShow} from "../../components";
import Triage from "../triage/triage";
const Wrapper=()=>{
    const [show,setShow]=useState(false);
    return <>
        <div>
        <Row>
            <Col xs={24}><FilterBox/></Col>
        </Row>
        <Row>
            <Col xs={24}>
                <TableShow/>
            </Col>
        </Row>
        <input type="button" value={"test"} onClick={()=>setShow(true)}/>
        </div>
        <div className={`floatWindow ${show && `show`}`}>
            <Triage onEscape={()=>setShow(false)}/>
        </div>
    </>
}
export default Wrapper;