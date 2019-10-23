import { IState } from "../reducers";

export const selectUserInfo = (state: IState) => state.user;
export const selectIsLoggedIn = (state: IState) => {
  return !!selectUserInfo(state).token;
};
export const selectLoginError = (state: IState) => {
  return state.userError;
};
