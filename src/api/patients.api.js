import axios from "axios";
import {urls,header} from "./consts";
const patients={
    get:async(params)=>{
        try{
            return await axios.post(urls.getPatients,{...params},{headers:header(true)});
        }
        catch (e) {
            return e;
        }

    }
}
export default patients;