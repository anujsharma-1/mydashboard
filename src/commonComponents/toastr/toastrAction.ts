import { ToastrConstants } from "./toastrConstants"

export const successToast = (data:any) => ({
    type:ToastrConstants.Success_Toastr,
    data,
});
export const failedToast = (data:any) => ({
    type:ToastrConstants.Failure_Toastr,
    data,
});
export const resetToastr = () => ({
    type:ToastrConstants.Reset_Toastr
});