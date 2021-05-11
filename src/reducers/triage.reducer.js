import {TriageActionType} from "../models/actionTypes";
let model={
    init:{
    }

}
const TriageReducer=(state=model, action)=>{
    switch (action.type) {
        
        case TriageActionType.setInit:
            debugger;
            return{
                ...state,
                init:action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default TriageReducer;