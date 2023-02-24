import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { FilterBox, TableShow } from "../../components";
import { useDispatch } from "react-redux";
import { changeLoading, changeMessage } from "../../actions/visual.action";
import patients from "./../../api/patients.api";
import triage from "../../api/triage";
import Print from "../print/print";

const Wrapper = () => {
    const dispatch = useDispatch();
    const [param, setParam] = useState(null);
    const { information } = useSelector((state) => state.Account);

    const [dataSearch, setDataSearch] = useState(null);
    const [rowSelect, setRowSelect] = useState(null);
    const [printInfo, setPrintInfo] = useState(null);
    useEffect(() => {
        if (rowSelect) {
            triage.getPatientInformation({
                id: rowSelect.toString(),
                UserId: information.UserId.toString(),
                BranchId: information.BranchId.toString(),
                IsNotCompress: true
            }).then(data => {
                setPrintInfo(data.data);
            }, err => {
            })
        }

    }, [rowSelect])
    useEffect(() => {
        if (param) {
            dispatch(changeLoading(true));
            patients.get(param).then(data => {
                dispatch(changeLoading(false));
                let cash = data.data.map((i, index) => ({ ...i, key: index }));
                setDataSearch(cash);

            }).catch(e => {
                dispatch(changeLoading(false));
                dispatch(changeMessage({ show: true, content: "مشکل در دریافت اطلاعات بیماران" }))

            })
        }
    }, [param, dispatch]);
    return <>
        <div>
            {
                // printInfo ? 
                //     <Print data={printInfo} onClose={()=>setPrintInfo(null)}/>
                //     :
                <>
                    <Row>
                        <Col xs={24}>
                            <FilterBox onSearch={(e) => { setParam(e) }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <TableShow onPrint={(id) => { setRowSelect(id) }} data={dataSearch} />
                        </Col>
                    </Row>
                </>
            }

        </div>

    </>
}
export default Wrapper;