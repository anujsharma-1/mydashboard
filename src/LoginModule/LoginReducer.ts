import { LoginActionConstants } from "./LoginActionConstants";
interface loginState {
  allLoginCreds: any;
  isLoggedIn: boolean;
  isLoginError: boolean;
  username: string;
  password: string;
  sidebarActiveTab:number;
}
const initialState: loginState = {
  allLoginCreds: [
    {
      username:"anuj",
      name: "Anuj",
      password: "1234",
      gender: "Male",
      role: "Super Admin",
      exp: "10 yrs",
      email:"Anuj@gmail.com",
      phone:"6373626282",
      city:"Abc Extension",
      state:"Abc Pradesh",
      Citizen_OF:"ABC",
      id:"000112",
    },
    {
      username:"user",
      name: "Direct User",
      password: "1234",
      gender: "Female",
      role: "User",
      exp: "2 yrs",
      email:"Direct_user@gmail.com",
      phone:"8367628201",
      city:"Greater Abc",
      state:"Pea Hari",
      Citizen_OF:"South Korea",
      id:"000113"
    },
    {
      username:"admin",
      name: "Self Admin",
      password: "1234",
      gender: "Male",
      role: "admin",
      exp: "6 yrs",
      email:"Admin@gmail.com",
      phone:"9173652282",
      city:"Mno bad",
      state:"Mno Pradesh",
      Citizen_OF:"Uganda",
      id:"000114"
    },
    {
      username:"anuj",
      name: "Anuj",
      password: "1234",
      gender: "Male",
      role: "Super Admin",
      exp: "10 yrs",
      email:"Anuj@gmail.com",
      phone:"6373626282",
      city:"Abc Extension",
      state:"Abc Pradesh",
      Citizen_OF:"ABC",
      id:"000115"
    },
    {
      username:"user",
      name: "Direct User",
      password: "1234",
      gender: "Female",
      role: "User",
      exp: "2 yrs",
      email:"Direct_user@gmail.com",
      phone:"8367628201",
      city:"Greater Abc",
      state:"Pea Hari",
      Citizen_OF:"South Korea",
      id:"00016"
    },
    {
      username:"admin",
      name: "Self Admin",
      password: "1234",
      gender: "Male",
      role: "admin",
      exp: "6 yrs",
      email:"Admin@gmail.com",
      phone:"9173652282",
      city:"Mno bad",
      state:"Mno Pradesh",
      Citizen_OF:"Uganda",
      id:"000117"
    },
    {
      username:"anuj",
      name: "Anuj",
      password: "1234",
      gender: "Male",
      role: "Super Admin",
      exp: "10 yrs",
      email:"Anuj@gmail.com",
      phone:"6373626282",
      city:"Abc Extension",
      state:"Abc Pradesh",
      Citizen_OF:"ABC",
      id:"000118"
    },
    {
      username:"user",
      name: "Direct User",
      password: "1234",
      gender: "Female",
      role: "User",
      exp: "2 yrs",
      email:"Direct_user@gmail.com",
      phone:"8367628201",
      city:"Greater Abc",
      state:"Pea Hari",
      Citizen_OF:"South Korea",
      id:"000119"
    },
    {
      username:"admin",
      name: "Self Admin",
      password: "1234",
      gender: "Male",
      role: "admin",
      exp: "6 yrs",
      email:"Admin@gmail.com",
      phone:"9173652282",
      city:"Mno bad",
      state:"Mno Pradesh",
      Citizen_OF:"Uganda",
      id:"000120"
    },
  ],
  username: "",
  password: "",
  isLoggedIn: false,
  isLoginError: false,
  sidebarActiveTab:0,
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActionConstants.Login_Username_Password_Submit: {
      let isLoggedIn = false,
        username = "",
        password = "",
        isLoginError = false;
      for (let i = 0; i < state.allLoginCreds.length; i++) {
        if (
          state.allLoginCreds[i].username === action.data.username &&
          state.allLoginCreds[i].password === action.data.password
        ) {
          username = action.data.username;
          password = action.data.password;
          isLoggedIn = true;
          break;
        }
        if (i === state.allLoginCreds.length - 1) {
          isLoginError = true;
        }
      }
      return {
        ...state,
        isLoggedIn: isLoggedIn,
        username: username,
        password: password,
        isLoginError: isLoginError,
      };
    }
    case LoginActionConstants.User_Logout: {
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
        isLoginError: false,
      };
    }
    case LoginActionConstants.Update_User_Details: {
      let editedUserIndex = -1;
      for(let i=0; i<state.allLoginCreds.length; i++){
        if(state.allLoginCreds[i].id === action.data.id)
          editedUserIndex = i;
      }
      let originalCreds:any=JSON.parse(JSON.stringify(state.allLoginCreds));
      if(editedUserIndex >= 0 && editedUserIndex !== null && editedUserIndex !== undefined){
        originalCreds[editedUserIndex] = action.data;
      } else if(editedUserIndex < 0){
        const genId = Math.floor(Math.random()*1000000);
        action.data.id = `${genId}`;
        originalCreds.push(action.data)
      }
      return {
        ...state,
        allLoginCreds : originalCreds,
      }
    }
    case LoginActionConstants.Submit_User_Input_Form: {
      return {
        ...state,
        sidebarActiveTab: action.data,
      }
    }
    case LoginActionConstants.Delete_User_Entry: {
      let deleteUserIndex = -1;
      for(let i=0; i<state.allLoginCreds.length; i++){
        if(state.allLoginCreds[i].id === action.data)
          deleteUserIndex = i;
      }
      let originalCreds:any=JSON.parse(JSON.stringify(state.allLoginCreds));
      if(deleteUserIndex >= 0 && deleteUserIndex !== null && deleteUserIndex !== undefined){
        originalCreds.splice(deleteUserIndex, 1);
      }
      return {
        ...state,
        allLoginCreds: originalCreds,
      }
    }
    default:
      return { ...state };
  }
};
