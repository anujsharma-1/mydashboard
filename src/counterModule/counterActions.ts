
import { counterActionConstants } from "./counterActionConstants"

export const incrementSuccess = (payload:any) => {
    return {
        type: counterActionConstants.Counter_Increment,
        payload
    }
}
