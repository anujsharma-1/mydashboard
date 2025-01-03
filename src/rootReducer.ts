import { combineReducers } from 'redux';
import { counterReducer } from './counterModule/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
