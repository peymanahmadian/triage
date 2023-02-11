import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { FilterBox, TableShow } from "../../components";
import { useDispatch } from "react-redux";
import { changeLoading, changeMessage } from "../../actions/visual.action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import patients from "./../../api/patients.api";
import { getAllPatients } from "../../api/patients.api";
import triage from "../../api/triage";
import Print from "../print/print";
import moment from "moment/moment";

const Home = () => {
    const dispatch = useDispatch();
    const { information } = useSelector((state) => state.Account);
    const [param, setParam] = useState(null);
    const BranchID = information?.BranchId || null;
    //load init information
    useEffect(() => {
        if (BranchID) {
            setParam({
                "BranchId": BranchID,
                "LocationId": null,
                "TriageCode": 0,
                "TriageQuitId": 1,
                "FirstName": null,
                "LastName": null,
                "DateOf1": moment().format("YYYY-MM-DD"),
                "DateOf2": moment().format("YYYY-MM-DD"),
                "IsAnonymous": null,
                "IsPrint": null,
                "TriageTypeId": null,
                "IsNotCompress": true
            })

        }
    }, [information])
    const queryClient = useQuery({
        queryKey: ["getPatients", param], queryFn: () => getAllPatients(param), enabled: (param !== null), staleTime: 5 * 60000, cacheTime: 5 * 60000
    })

    useEffect(() => {
        dispatch(changeLoading(false));
        if (queryClient.isFetching || queryClient.isLoading)
            dispatch(changeLoading(queryClient.isLoading || queryClient.isFetching))
    }, [queryClient.isFetching, queryClient.isLoading]);

    useEffect(() => {
        if (queryClient.isSuccess && queryClient.data.data) {
            let cash = queryClient.data.data.map((i, index) => ({ ...i, key: i.Triage_ID }));
            setDataSearch(cash);
        }
        if (queryClient.isError) {
            dispatch(changeMessage({ show: true, content: "مشکل در دریافت اطلاعات بیماران" }));
        }
    }, [queryClient.isSuccess, queryClient.isError]);
    //
    const [dataSearch, setDataSearch] = useState(null);
    const [rowSelect, setRowSelect] = useState(null);
    const [printInfo, setPrintInfo] = useState(null);
    // useEffect(() => {
    //     if (rowSelect) {
    //         triage.getPatientInformation({
    //             id: rowSelect.toString(),
    //             UserId: information.UserId.toString(),
    //             BranchId: information.BranchId.toString(),
    //             IsNotCompress: true
    //         }).then(data => {
    //             setPrintInfo(data.data);
    //         }, err => {
    //             debugger;
    //         })
    //     }

    // }, [rowSelect]);





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
                            {
                                queryClient.isSuccess && <TableShow onPrint={(id) => { setRowSelect(id) }} data={dataSearch} />
                            }

                        </Col>
                    </Row>
                </>
            }

        </div>

    </>
}
export default Home;