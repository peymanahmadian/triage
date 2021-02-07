import {Row,Col} from "antd";
import {FilterBox, TableShow} from "../../components";
const Wrapper=()=>{
    return <>
        <div>
            <Row>
                <Col xs={24}>
                    <FilterBox/>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <TableShow/>
                </Col>
            </Row>
        </div>

    </>
}
export default Wrapper;