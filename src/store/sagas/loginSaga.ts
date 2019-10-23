import { put, call, takeLatest } from "redux-saga/effects";
import { fetchLoginUser } from "../api";
import {
  setUserData,
  loginUser,
  setLoginError
} from "../actionCreators/loginAction";

export function* onUserLoginSaga(action: ReturnType<typeof loginUser>) {
  try {
    const response = yield call(fetchLoginUser, action.payload);
    yield put(setUserData(response.data.user));
    localStorage.setItem("userData", JSON.stringify(response.data));
    localStorage.setItem("userToken", response.data.user.token);
  } catch {
    yield put(setLoginError("email or password is invalid"));
  }
}

export default function* userRootSaga() {
  yield takeLatest(loginUser, onUserLoginSaga);
}
