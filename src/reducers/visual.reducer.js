import {visualActionType} from "../models/actionTypes";
const VisualReducer=(state={blur:false,open:false}, action)=>{
    switch (action.type) {
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
        default:
            return{
                ...state
            }
    }
}
export default VisualReducer;