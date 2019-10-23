import { takeLatest } from "redux-saga/effects";
import { logoutUser } from "../actionCreators/settingsAction";

export function* onUserLogoutSaga() {
  localStorage.clear();
}

export default function* userLogoutSaga() {
  yield takeLatest(logoutUser, onUserLogoutSaga);
}
