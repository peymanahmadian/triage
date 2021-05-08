import {useEffect,useState} from "react";
import {Row,Col} from "antd";
import {FilterBox, TableShow} from "../../components";
import {useDispatch} from "react-redux";
import {changeLoading,changeMessage} from "../../actions/visual.action";
import patients from "./../../api/patients.api";
const Wrapper=()=>{
    const dispatch=useDispatch();
    const [param,setParam]=useState(null);
    const [dataSearch,setDataSearch]=useState(null);

    useEffect(()=>{
        if(param){
            dispatch(changeLoading(true));
            patients.get(param).then(data=>{
                dispatch(changeLoading(false));
                let cash=data.data.map((i,index)=>({...i,key:index}));
                setDataSearch(cash);

            }).catch(e=>{
                dispatch(changeLoading(false));
                dispatch(changeMessage({show:true,content:"مشکل در دریافت اطلاعات بیماران"}))

            })
        }
    },[param,dispatch]);
    return <>
        <div>
            <Row>
                <Col xs={24}>
                    <FilterBox onSearch={(e)=>{setParam(e)}}/>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <TableShow data={dataSearch}/>
                </Col>
            </Row>
        </div>

    </>
}
export default Wrapper;