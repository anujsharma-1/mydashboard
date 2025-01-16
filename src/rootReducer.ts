import { combineReducers } from 'redux';
import { counterReducer } from './counterModule/counterReducer';
import { loginReducer } from './LoginModule/LoginReducer';
import { toastrReducer } from './commonComponents/toastr/toastrReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  login:loginReducer,
  toastr:toastrReducer,
});

export default rootReducer;
