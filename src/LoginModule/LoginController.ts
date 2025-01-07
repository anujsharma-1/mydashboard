import { useDispatch, useSelector } from "react-redux";
import { userLoginCreds, userLogoutAction } from "./LoginAction";
export const LoginController = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:any)=>state.login.isLoggedIn);
  const isLoginError = useSelector((state:any)=>state.login.isLoginError);
  const username = useSelector((state:any)=>state.login.username);
  const allLoginCreds = useSelector((state: any)=>state.login.allLoginCreds);
  const updateLoggedIn = (data: boolean)=> {
    dispatch(userLogoutAction(data))
  }
  const onSubmitLogin = (username: any, password: any) => {
    const data = { username, password };
    dispatch(userLoginCreds(data));
  };

  return {
    onSubmitLogin,
    isLoggedIn,
    updateLoggedIn,
    username,
    isLoginError,
    allLoginCreds,
  };

};
