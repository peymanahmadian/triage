import React, { useState, useEffect } from "react";
import { Input } from "antd";
import "./ageInput.scss";

const AgeInput = (props) => {
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);
    useEffect(() => {
        if (props.value) {
            setYear(parseInt(parseInt(props.value) / 12));
            setMonth(parseInt(props.value) % 12);
        }

    }, [props.value]);
    useEffect(() => {
        let sum = parseInt(year * 12) + parseInt(month);
        props.onChange(sum)
    }, [year, month])
    return (
        <div className={`ageInputContainer ${props.className}`}>



            <Input size="large" value={year} placeholder="سال" onChange={(e) => setYear(e.target.value)} />


            <Input size="large" value={month} placeholder="ماه" onChange={(e) => setMonth(e.target.value)} />



            {/* <Input type="number" size="large" value={day} placeholder="روز" onChange={(e)=>setDay(e.target.value)}/> */}
        </div>
    )
}
export default AgeInput;