import {visualActionType} from "../models/actionTypes";
let model={
    blur:false,
    open:false,
    loading: false,
    message:{show:false,content:null}
}
const VisualReducer=(state=model, action)=>{
    switch (action.type) {
        case visualActionType.changeLoading:
            return{
                ...state,
                loading:action.param
            }
        case visualActionType.changeBlur:
            return {
                ...state,
                blur:action.param,

            }
        case visualActionType.openWindow:
            return{
                ...state,
                open:action.param
            }
        case visualActionType.changeMessage:
            return{
                ...state,
                message: action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default VisualReducer;