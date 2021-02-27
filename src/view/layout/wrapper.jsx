import {Row,Col} from "antd";
import {FilterBox, TableShow} from "../../components";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {patientsActionType} from "../../models/actionTypes";
const Wrapper=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch({type:patientsActionType.getPatients,params:{
                "BranchId": 81,
                "LocationId": null,
                "TriageCode": 0,
                "TriageQuitId": 1,
                "FirstName": null,
                "LastName": null,
                "DateOf1": "2020-02-26T00:00:00",
                "DateOf2": "2021-02-26T23:59:00",
                "IsAnonymous": null,
                "IsPrint": null,
                "TriageTypeId": null,
                "IsNotCompress": true
            }});
    },[]);
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