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
        try{
            return await axios.post(URL.getTriageDictionarySearchAll,{},{headers:header(true)})
        }catch(e){
            return e;
        }
    },
    searchDrug:async(params)=>{
        try{
            return await axios.post(URL.getExaminationItemSearch,{"ItemId":null,"ItemName":params,"MasterServiceGroupIdList":[1,2],"IsNotCompress":true},{headers:header(true)})
        }catch (e){
            return e;
        }
    },
    postTriage:async(params)=>{
        debugger;
        try{
            return await axios.post(URL.saveTriage,params,{headers:header(true)});
        }catch(e){
            return e;
        }
        
    }

}

export default triage;