import {Table} from "antd";
import Expand from "./expand";

import "./tableShow.scss";
const TableShow=()=>{
    const columns = [
        {
            title: 'نوع تریاژ',
            dataIndex: 'triageType',
            key: 'triageType',
        },
        {
            title: 'کد ترِیاژ',
            dataIndex: 'triageCode',
            key: 'triageCode',
        },
        {
            title: 'نام',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'نام خانوادگی',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'جنسیت',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: 'نحوه ورود',
            dataIndex: 'input',
            key: 'input',
        },
        {
            title: 'نحوه ارجاع',
            dataIndex: 'ref',
            key: 'ref',
        },
        {
            title: 'سطح بندی',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'دلیل ارجاع',
            dataIndex: 'resRef',
            key: 'resRef',
        },
    ];
    const data=[{
        triageType:"تست",
        triageCode:"تست",
        firstName:"پیمان",
        lastName:"احمدیان",
        sex:"مرد",
        input:"ورود",
        ref:"خروج",
        level:"عادی",
        resRef:"عادی"
    }]
    return(
        <Table className={"tableShow"} columns={columns} dataSource={data}
           expandable={{
               expandedRowRender: record =><Expand/>
           }}
        />
    )
}
export default TableShow;