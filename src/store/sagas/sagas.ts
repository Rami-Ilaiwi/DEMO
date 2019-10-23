import { select, put, call, takeLatest } from "redux-saga/effects";
import fetchLoginUser from "../api";
import { setUserData, loginUser } from "../actionCreators/loginAction";

export function* onUserLoginSaga(action: ReturnType<typeof loginUser>) {
  const response = yield call(fetchLoginUser, action.payload);
  // userData(response);
  yield put(setUserData(response.data.user));
  localStorage.setItem("userData", JSON.stringify(response.data));
  localStorage.setItem("userToken", response.data.user.token);
}

export default function* userRootSaga() {
  yield takeLatest(loginUser, onUserLoginSaga);
}
