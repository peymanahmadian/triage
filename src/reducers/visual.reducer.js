import {visualActionType} from "../models/actionTypes";
const AccountReducer=(state={blue:false}, action)=>{
    switch (action.type) {
        case visualActionType.changeBlur:
            return {
                blur:action.state,
                ...state
            }
        default:
            return{
                ...state
            }
    }
}
export default AccountReducer;