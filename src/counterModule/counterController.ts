import { useDispatch, useSelector } from "react-redux"
import { counterActionConstants } from "./counterActionConstants";

export const CounterController = () =>{

    const dispatch = useDispatch();
    const counterValue = useSelector((state:any)=> state?.counter?.value)
    const increaseCounter = (data=1) => {
        dispatch({
            type:counterActionConstants.Counter_Increment, data
        })
    }

    return {
        increaseCounter,
        counterValue,
    }
}