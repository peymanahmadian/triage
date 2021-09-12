import Triage from "../../assets/images/icons/triage.svg";
import {Button} from "../../components";
import "../../assets/styles/sidebar.scss";
import {visualActionType} from "../../models/actionTypes";
import {useDispatch} from "react-redux";
import {Modal} from "antd";
import {useState} from "react";
const SidebarTriage=()=>{
    const dispatch=useDispatch();
    const [triageList,setTriageList]=useState(false);
    return(
        <>
            <Modal
                title="لیست بیماران تریاژ شده"
                centered
                visible={triageList}
                onOk={() =>{setTriageList(false)}}
                onCancel={() =>{setTriageList(false)}}
                width={"80%"}
                >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
            <aside className={"sidebar triage"}>
        <div className={"icon"}>
            <img src={Triage} alt={"حساب کاربری"} height={"65"}/>
        </div>
        <div className={"username"}>
            <strong>فرم تریاژ</strong>
        </div>
        <div className={"operation paddingUp"}>
            <Button block className={"marginBottom"}>تریاژ جدید</Button>
            <Button block className={"marginBottom"} onClick={()=>setTriageList(true)}> لیست تریاژ </Button>
            <Button block className={"marginBottom"}> تاریخچه تغییرات </Button>
            <Button block className={"marginBottom"}> مدیریت گزارش پرستاری </Button>
            <Button block className={"marginBottom"}> EMS </Button>
        </div>
        <div className={"report paddingUp"}>
            <Button block className={"marginBottom"}>چاپ سریع</Button>
            <Button block className={"marginBottom"}>پیش نمایش</Button>
        </div>
        <div className={"report paddingUp"}>
            <Button color={"red"} block className={"marginBottom"} onClick={()=>{dispatch({type:visualActionType.openWindow,param:false});dispatch({type:visualActionType.changeBlur,param:false})}}>بستن</Button>
        </div>

    </aside>
        </>
    )
}
export default SidebarTriage;