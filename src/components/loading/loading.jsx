import "./loading.scss";
import {Spin} from "antd";
const Loading=()=>{
    return <div className={"loading"}><div><Spin size="large" /><div>در حال بارگذاری داده...لطفا شکیبا باشید</div></div></div>
}
export default Loading;