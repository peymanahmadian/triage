import { Table } from "antd";
import { Button } from "../../components";
import Expand from "./expand";
import "./tableShow.scss";
const TableShow = (props) => {

    const columns = [
        {
            title: 'کد',
            dataIndex: 'Triage_ID',
            key: 'Triage_ID'

        },
        {
            title: 'نوع تریاژ',
            dataIndex: 'TriageTypeName',
            key: 'TriageTypeName',
            sorter: (a, b) => (a.TriageTypeName).charCodeAt(0) - (b.TriageTypeName).charCodeAt(0)
        },
        {
            title: 'کد ترِیاژ',
            dataIndex: 'Triage_Code',
            key: 'Triage_Code',
            sorter: (a, b) => a.Triage_Code - b.Triage_Code

        },
        {
            title: 'نام',
            dataIndex: 'FirstName',
            key: 'FirstName',
            sorter: (a, b) => (a.FirstName).charCodeAt(0) - (b.FirstName).charCodeAt(0)

        },
        {
            title: 'نام خانوادگی',
            dataIndex: 'LastName',
            key: 'LastName',
            sorter: (a, b) => (a.LastName).charCodeAt(0) - (b.LastName).charCodeAt(0)
        },
        {
            title: 'جنسیت',
            dataIndex: 'AgeTypeOfText',
            key: 'AgeTypeOfText',
            sorter: (a, b) => (a.AgeTypeOfText).charCodeAt(0) - (b.AgeTypeOfText).charCodeAt(0)
        },
        {
            title: 'سطح بندی',
            dataIndex: 'TriageLevel',
            key: 'TriageLevel',
            sorter: (a, b) => a.TriageLevel - b.TriageLevel
        },
        {
            title: 'دلیل مراجعه',
            dataIndex: 'EncounterReasonName',
            key: 'EncounterReasonName',
            sorter: (a, b) => (a.EncounterReasonName).charCodeAt(0) - (b.EncounterReasonName).charCodeAt(0)
        },
        {
            title: 'چاپ',
            render: (data) => <Button onClick={() => props.onPrint(data.Triage_ID)}>چاپ</Button>
        }
    ];
    return (
        <Table className={"tableShow"} columns={columns} dataSource={props.data}
            expandable={{
                expandedRowRender: record => <Expand record={record} />,
            }}

        />
    )
}
export default TableShow;