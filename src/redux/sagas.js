import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import Api from '...';

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: 'USER_FETCH_SUCCEEDED', user: user });
  // } catch (e) {
  //   yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  // }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
