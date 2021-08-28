import {TriageActionType} from "../models/actionTypes";
export const init=(param)=>({type:TriageActionType.init,param});
export const setInit=(param)=>({type:TriageActionType.setInit,param});
export const fillTriage=(param)=>({type:TriageActionType.fillTriage,param});
export const fillSicknessList=(param)=>({type:TriageActionType.fillSicknessList,param});
export const postTriage=(param)=>({type:TriageActionType.postTriage,param});