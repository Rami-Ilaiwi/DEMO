import { put, call, takeLatest } from "redux-saga/effects";
import { fetchUserSettings } from "../api";
import { push } from "react-router-redux";
import { changeSettings } from "../actionCreators/settingsAction";
import { setUserData } from "../actionCreators/loginAction";

export function* settingsSaga(action: ReturnType<typeof changeSettings>) {
  try {
    const response = yield call(fetchUserSettings, action.payload);
    yield put(setUserData(response.user));
    localStorage.setItem("userData", JSON.stringify(response));
    localStorage.setItem("userToken", response.user.token);
    yield put(push(`/@${response.user.username}`));
  } catch (error) {
    Object.entries(error.response.data.errors).forEach(([field, errors]) => {
      if (Array.isArray(errors)) {
        action.payload.handleFieldError.setFieldError(field, errors[0]);
      }
    });
  }
}

export default function* userSettingsSaga() {
  yield takeLatest(changeSettings, settingsSaga);
}
