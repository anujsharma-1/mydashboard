import { combineReducers } from 'redux';
import { counterReducer } from './counterModule/counterReducer';
import { loginReducer } from './LoginModule/LoginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  login:loginReducer,
});

export default rootReducer;
