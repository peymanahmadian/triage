import {useState,useEffect} from "react";
import {PlusOutlined,MinusOutlined} from "@ant-design/icons";
import "./combo.scss";

const Combo=(props)=>{
    const [value,setValue]=useState(0);
    useEffect(()=>{
        props.onChange && props.onChange(value);
    },[value,props]);
    return(
        <div className={"comboInput"}>
            <div className={"labelText"}>{props.label}</div>
            <div className={"inputText"} ><input value={value} type={"text"}/></div>
            <div className={"buttons"}>
                <div className={"up"}><button type={"button"} onClick={()=>setValue(value+1)}><PlusOutlined /></button></div>
                <div className={"bottom"}><button type={"button"} onClick={()=>setValue(value-1)}><MinusOutlined /></button></div>
            </div>
        </div>
    )
}
export default Combo;