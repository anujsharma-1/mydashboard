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
