import axios from "axios";
import {header} from "./consts";
import {URL} from "./../models/urlNames";
const triage={
    init:async(params)=>{
        try{
            return await axios.post(URL.getTriageInit,{...params},{headers:header(true)});
        }
        catch (e) {
            return e;
        }
    },
    fillTriage:async()=>{
        debugger;
        try{
            return await axios.post(URL.getTriageDictionarySearchAll,{},{headers:header(true)})
        }catch(e){
            return e;
        }
    }

}
export default triage;