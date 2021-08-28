import {takeEvery,put,call} from "redux-saga/effects";
//import call
import triage from "../api/triage";
//import model
//actions
import {changeLoading,changeMessage} from "./../actions/visual.action";
import {setInit,fillSicknessList} from "./../actions/triage.action";
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
            yield put(fillSicknessList(response.data))
        }
    }catch (e){

        yield put(changeLoading(false));
        yield put(changeMessage({show:true,content:"خطای ناشناخته از سمت سرور"}));
    }
}
function* postTriageFn(action){
    yield put(changeLoading(true));
    try{
        const response=yield call(triage.fillTriage,action.param);        
        if(response.status===200){
            yield put(changeLoading(false));
            yield put(changeMessage({show:true,content:"ثبت تریاژ با موفقیت انجام شد"}));
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
    yield takeEvery(TriageActionType.fillTriage,fillTriageFn);
}
export function* postTriage(){
    yield takeEvery(TriageActionType.postTriage,postTriageFn);
}
