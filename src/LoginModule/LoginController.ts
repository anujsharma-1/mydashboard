import { useDispatch, useSelector } from "react-redux";
import { userLoginCreds } from "./LoginAction";
export const LoginController = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:any)=>state.login.isLoggedIn)
  const onSubmitLogin = (username: any, password: any) => {
    console.log(username, password);
    const data = { username, password };
    dispatch(userLoginCreds(data));
  };
  
  return {
    onSubmitLogin,
    isLoggedIn,
  };

};
