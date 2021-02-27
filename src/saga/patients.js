import {takeEvery,call} from "redux-saga/effects";
import {patientsActionType} from "./../models/actionTypes";
import {patients} from "./../api";
function* getPatientsFN(action){
    const result=yield call(patients.get,action.params);
}
export function* getPatients(){
    yield takeEvery(patientsActionType.getPatients,getPatientsFN);
}