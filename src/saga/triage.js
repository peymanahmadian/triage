import {takeEvery,put,call} from "redux-saga/effects";
import Axios from "axios";
//import call
import triage from "../api/triage";
//import model
import {URL} from "./../models/urlNames";
import {header} from "./../api/consts";
//actions
import {changeLoading,changeMessage} from "./../actions/visual.action";
import {setInit} from "./../actions/triage.action";
//action name
import {TriageActionType} from "./../models/actionTypes";

//function
function* initFn(action){
    yield put(changeLoading(true));
    try {
        const response=yield call(triage.init,{...action.param,IsNotCompress:true});
        if(response.status===200){
            yield put(changeLoading(false));
            yield put(setInit(response.data));
        }
    }catch (e) {
        yield put(changeLoading(false));
        yield put(changeMessage({show:true,content:"خطای ناشناخته از سمت سرور"}));
    }

}
function* fillTriageFn(action){
    yield put(changeLoading(true));
    try{
        const response=yield call(triage.fillTriage,{});
        if(response.status===200){
            debugger;
        }
    }catch (e){

        yield put(changeLoading(false));
        yield put(changeMessage({show:true,content:"خطای ناشناخته از سمت سرور"}));
    }
}
//takeActions
export function* init(){
    yield takeEvery(TriageActionType.init,initFn);
}
export function* fillTriage(){
    debugger;
    yield takeEvery(TriageActionType.fillTriage,fillTriageFn);
}
