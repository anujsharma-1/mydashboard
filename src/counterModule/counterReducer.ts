import { counterActionConstants } from "./counterActionConstants";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: any)=>{
    switch (action.type) {
        case counterActionConstants.Counter_Increment_In_Reducer : {
            return {
                ...state,
                value:state.value + action.data,
            }
        }
        default:
            return {...state};
    }
}