import { LoginActionConstants } from "./LoginActionConstants";
interface loginState {
  allLoginCreds: any;
  isLoggedIn: boolean;
  isLoginError: boolean,
}
const initialState: loginState = {
  allLoginCreds: [
    { username: "anuj", password: "1234" },
    { username: "user", password: "1234" },
    { username: "admin", password: "1234" },
  ],

  isLoggedIn: false,
  isLoginError:false,
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActionConstants.Login_Username_Password_Submit: {
      let isLoggedIn;
      for(let i=0;i<state.allLoginCreds.length;i++){
        if (
            state.allLoginCreds[i].username === action.data.username &&
            state.allLoginCreds[i].password === action.data.password
          ) {
            isLoggedIn =  true;
            break;
          }
      }
      return {
        ...state,
        isLoggedIn: isLoggedIn,
        // isLoginError: !isLoggedIn,
    };
    }
    default:
      return { ...state };
  }
};
