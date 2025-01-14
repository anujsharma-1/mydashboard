import { LoginActionConstants } from "./LoginActionConstants";

export const userLoginCreds = (data: any) => ({
  type: LoginActionConstants.Login_Username_Password_Submit,
  data,
});
export const userLogoutAction = (data: any) => ({
  type: LoginActionConstants.User_Logout,
  data,
});
export const editUserDetails = (data:any)=> ({
  type: LoginActionConstants.Update_User_Details,
  data
})
export const userFormSubmit = (data:any)=> ({
  type: LoginActionConstants.Submit_User_Input_Form,
  data
})
export const deleteUserEntry = (data:string) => ({
  type: LoginActionConstants.Delete_User_Entry,
  data
})