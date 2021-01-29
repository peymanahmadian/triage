import {Row,Col} from "antd";
import {FilterBox, TableShow} from "../../components";
const Wrapper=()=>{
    return <>
        <Row>
            <Col xs={24}><FilterBox/></Col>
        </Row>
        <Row>
            <Col xs={24}>
                <TableShow/>
            </Col>
        </Row>
    </>
}
export default Wrapper;