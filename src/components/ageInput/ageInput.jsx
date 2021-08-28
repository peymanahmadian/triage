import React,{useState,useEffect} from "react";
import {Input} from "antd";
import "./ageInput.scss";

const AgeInput=(props)=>{
    const [year,setYear]=useState(null);
    const [month,setMonth]=useState(null);
    const [day,setDay]=useState(null);
    useEffect(()=>{
        let sum=(year*365)+(month*30)+day;
        props.onChange(sum)
    },[year,month,day])
    return(
        <div className={`ageInputContainer ${props.className}`}>
            <Input type="number" size="large" value={year} placeholder="سال" onChange={(e)=>setYear(e.target.value)}/>
            <Input type="number" size="large" value={month} placeholder="ماه" onChange={(e)=>setMonth(e.target.value)}/>
            <Input type="number" size="large" value={day} placeholder="روز" onChange={(e)=>setDay(e.target.value)}/>
        </div>
    )
}
export default AgeInput;