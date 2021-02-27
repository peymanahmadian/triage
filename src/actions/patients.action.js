import {patientsActionType} from "./../models/actionTypes";
export const getPatients=(params)=>({type:patientsActionType.getPatients,params});
export const setPatients=(params)=>({type:patientsActionType.setPatients,params});