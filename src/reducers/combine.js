//import lib
import {combineReducers} from "redux";
//import reducer
import AccountReducer from "./account.reducer";
export default combineReducers({
    Account: AccountReducer
});