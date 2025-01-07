import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LoginActionConstants } from './LoginActionConstants';

function* handleLogout() {
//   try {
//     const data: number = yield call(() => {
//         setTimeout(()=>{
//             return true
//         }, 200)
//     });
//     // console.log(data, "logout functionality")
//     yield put({
//         type: LoginActionConstants.User_Logout,
//         data,
//     });
//   } catch (error) {
//     console.error('Saga error:', error);
//   }
}

export default function* LoginSaga() {
//   yield takeLatest(LoginActionConstants.User_Logout, handleLogout);
}