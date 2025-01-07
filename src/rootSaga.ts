import { all } from 'redux-saga/effects';
import counterSaga from '../src/counterModule/counterSaga';
import LoginSaga from './LoginModule/LoginSaga';

export default function* rootSaga() {
  yield all([
    counterSaga(), // Add your sagas here
    LoginSaga(),
  ]);
}
