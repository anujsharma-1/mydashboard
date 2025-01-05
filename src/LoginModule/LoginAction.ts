import { LoginActionConstants } from "./LoginActionConstants";

export const userLoginCreds = (data: any) => ({
  type: LoginActionConstants.Login_Username_Password_Submit,
  data,
});
