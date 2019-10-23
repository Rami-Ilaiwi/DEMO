import { takeLatest, all } from "redux-saga/effects";
import { loginUser } from "../actionCreators/loginAction";
import userRootSaga from "./loginSaga";
import userLogoutSaga from "./logoutSaga";

export function* rootSaga() {
  yield all([userRootSaga(), userLogoutSaga()]);
}
