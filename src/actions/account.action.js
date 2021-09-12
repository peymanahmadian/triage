import {accountActionType} from "../models/actionTypes";
export const authentication=(param)=>({type:accountActionType.authentication,param});
export const getInformation=()=>({type:accountActionType.getInformation});
export const setInformation=(param)=>({type:accountActionType.setInformation,param});
export const valid=(param)=>({type:accountActionType.valid,param});
export const singOutUser=()=>({type:accountActionType.singOutUser})