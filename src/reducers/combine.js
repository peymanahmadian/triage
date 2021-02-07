//import lib
import {combineReducers} from "redux";
//import reducer
import AccountReducer from "./account.reducer";
import VisualReducer from "./visual.reducer";
export default combineReducers({
    Account: AccountReducer,
    Visual:VisualReducer
});