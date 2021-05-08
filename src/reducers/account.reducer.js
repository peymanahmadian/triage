import {accountActionType} from "../models/actionTypes";
let model={
    valid:false,
    information:null
}
const AccountReducer=(state=model, action)=>{
    switch (action.type) {
        case accountActionType.valid:
            return {
                ...state,
                valid: action.param
            }
        case accountActionType.setInformation:
            return{
                ...state,
                information: action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default AccountReducer;