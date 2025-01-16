import { ToastrConstants, toastrType } from "./toastrConstants";

interface toastrState {
    toastrState:boolean;
    toastrType:string,
    toastrMessage:string,
}
const initialState: toastrState = {
    toastrState:false,
    toastrType:"",
    toastrMessage:"",
};
export const toastrReducer = (state=initialState, action:any) => {
    switch(action.type){
        case ToastrConstants.Success_Toastr:{
            return {
                toastrState:true,
                toastrType: toastrType.Success,
                toastrMessage:action.data.message,
            }
        }
        case ToastrConstants.Failure_Toastr:{
            return {
                toastrState:true,
                toastrType: toastrType.Failed,
                toastrMessage:action.data.message,
            }
        }
        case ToastrConstants.Reset_Toastr:{
            return {
                ...initialState
            }
        }
        default: return {
            ...state
        }
    }
}