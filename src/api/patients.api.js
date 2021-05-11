import axios from "axios";
import {urls,header} from "./consts";
import {URL} from "../models/urlNames";
const patients={
    get:async(params)=>{
        try{
            return await axios.post(URL.getPatients,{...params},{headers:header(true)});
        }
        catch (e) {
            return e;
        }

    }
}
export default patients;