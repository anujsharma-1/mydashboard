import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { counterActionConstants } from './counterActionConstants'

function* handleIncrement() {
  try {
    const data: number = yield call(() => Promise.resolve(1)); // Simulate an API call
    yield put({
        type: counterActionConstants.Counter_Increment_In_Reducer,
        data,
    });
  } catch (error) {
    console.error('Saga error:', error);
  }
}

export default function* counterSaga() {
  yield takeLatest(counterActionConstants.Counter_Increment, handleIncrement);
}
