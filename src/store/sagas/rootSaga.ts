import { takeLatest, all } from "redux-saga/effects";
import { loginUser } from "../actionCreators/loginAction";
import userRootSaga from "./sagas";

export function* rootSaga() {
  yield all([userRootSaga()]);
}
