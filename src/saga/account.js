import {takeEvery,put} from "redux-saga/effects";
import Axios from "axios";
//import model
import {URL} from "./../models/urlNames";
import {header} from "./../api/consts";
//actions
import {changeLoading,changeMessage} from "./../actions/visual.action";
import {valid,setInformation} from "./../actions/account.action";
//action name
import {accountActionType} from "./../models/actionTypes";

//function
function* authenticationFn(action){
    yield put(changeLoading(true));
    try {
        const response = yield Axios.post(URL.getToken, {
            ...action.param,
            "IsNotCompress": true
        }, {headers:header(false)});
        if(response.status===204){
            yield put(changeLoading(false));
            yield put(changeMessage({show:true,content:"نام کاربری و رمز عبور اشتباه می باشد"}));
        }else if(response.status===200){
            localStorage.setItem("triageToken",response.data.TokenKey);
            localStorage.setItem("triagePass",JSON.stringify(action.param));
            yield put(valid(true));
            yield put(changeLoading(false));
        }
    }catch (e) {
        yield put(changeLoading(false));
        yield put(changeMessage({show:true,content:"خطای ناشناخته از سمت سرور"}));
    }

}
function* getInformationFn(){
    yield put(changeLoading(true));
    try {
        let param=localStorage.getItem("triagePass");
        param=JSON.parse(param);
        const response = yield Axios.post(URL.getUser, {
            ...param,
            "IsNotCompress": true
        }, {headers:header(true)});
        if(response.status===204){
            localStorage.removeItem("triageToken");
            localStorage.removeItem("triagePass");
            yield put(valid(false));
            yield put(changeLoading(false));

        }else if(response.status===200){
            debugger;
            yield put(setInformation(response.data))
            yield put(changeLoading(false));
        }
    }catch (e) {
        yield put(changeLoading(false));
        yield put(changeMessage({show:true,content:"خطای ناشناخته از سمت سرور"}));
    }
}
function* singOutInformationFn(){
    debugger;
    localStorage.removeItem("triageToken");
    localStorage.removeItem("triagePass");
    yield put(setInformation(null));
    yield put(valid(false));
}
//takeActions
export function* authentication(){
    yield takeEvery(accountActionType.authentication,authenticationFn);
}
export function* getInformation(){
    yield takeEvery(accountActionType.getInformation,getInformationFn);
}
export function* singOutInformation(){
    yield takeEvery(accountActionType.singOutUser,singOutInformationFn)
}