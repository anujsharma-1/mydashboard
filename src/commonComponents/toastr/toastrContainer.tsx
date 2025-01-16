import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toastrCSS from "./Toastr.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToastr } from "./toastrAction";
import { toastrType } from './toastrConstants';
export const ToastrContainer = () => {
    const dispatch = useDispatch();
    const toastrState = useSelector((state:any)=>state.toastr.toastrState)
    const toastrTypeVal = useSelector((state:any)=>state.toastr.toastrType)
    const toastrMessage = useSelector((state:any)=>state.toastr.toastrMessage)
    const resetToastrMain = () =>{
        if(toastrState)
            dispatch(resetToastr())
    }
    useEffect(()=>{
        console.log(toastrState)
        setTimeout(()=>{
            console.log("console speed ")
            resetToastrMain();
        }, 3000)
    }, [toastrState])

    return (
        <>

        {toastrState && <div className={toastrCSS.container}>
            <div className={toastrTypeVal === toastrType.Success ? toastrCSS.toastParentSuccess: toastrCSS.toastParentFail}>
                <div className={toastrCSS.toast}>{toastrMessage}</div>
                <div className={toastrCSS.crossIcon} onClick={()=>{resetToastrMain()}}><FontAwesomeIcon icon={faX} /></div>
            </div>
        </div>}
        </>
    );
};
