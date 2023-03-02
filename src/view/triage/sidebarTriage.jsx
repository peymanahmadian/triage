import Triage from "../../assets/images/icons/triage.svg";
import { Button } from "../../components";
import "../../assets/styles/sidebar.scss";
import { visualActionType } from "../../models/actionTypes";
import { Modal } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const SidebarTriage = (props) => {
    const history = useHistory();
    const [triageList, setTriageList] = useState(false);
    return (
        <>
            <Modal
                title="لیست بیماران تریاژ شده"
                centered
                visible={triageList}
                onOk={() => { setTriageList(false) }}
                onCancel={() => { setTriageList(false) }}
                width={"80%"}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
            <aside className={"sidebar triage"}>
                <div className={"icon"}>
                    <img src={Triage} alt={"حساب کاربری"} height={"65"} />
                </div>
                <div className={"username"}>
                    <strong>فرم تریاژ</strong>
                </div>
                <div className={"operation paddingUp"}>
                    <Button block className={"marginBottom"} onClick={() => props.onNewTriage()}>تریاژ جدید</Button>
                    <Button block className={"marginBottom"} onClick={() => setTriageList(true)}> لیست تریاژ </Button>
                    <Button block className={"marginBottom"}> تاریخچه تغییرات </Button>
                    <Button block className={"marginBottom"}> مدیریت گزارش پرستاری </Button>
                    <Button block className={"marginBottom"}> EMS </Button>
                </div>
                <div className={"report paddingUp"}>
                    <Button block className={"marginBottom"} onClick={() => { history.push("/print/0") }}>چاپ سریع</Button>
                    <Button block className={"marginBottom"} onClick={() => { history.push("/print/0") }}>پیش نمایش</Button>
                </div>
                <div className={"report paddingUp"}>
                    <Button color={"red"} block className={"marginBottom"} onClick={() => { history.push("/") }}>بستن</Button>
                </div>

            </aside>
        </>
    )
}
export default SidebarTriage;