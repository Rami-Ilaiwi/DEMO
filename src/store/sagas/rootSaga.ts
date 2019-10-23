import { all } from "redux-saga/effects";
import userRootSaga from "./loginSaga";
import userLogoutSaga from "./logoutSaga";
import userSettingsSaga from "./settingsSaga";

export function* rootSaga() {
  yield all([userRootSaga(), userLogoutSaga(), userSettingsSaga()]);
}
