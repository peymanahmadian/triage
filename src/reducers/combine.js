//import lib
import {combineReducers} from "redux";
//import reducer
import AccountReducer from "./account.reducer";
import VisualReducer from "./visual.reducer";
import TriageReducer from "./triage.reducer";
export default combineReducers({
    Account: AccountReducer,
    Visual:VisualReducer,
    Triage:TriageReducer
});