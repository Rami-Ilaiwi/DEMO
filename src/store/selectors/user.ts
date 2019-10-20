import { IState } from "../reducers";

export const selectUserInfo = (state: IState) => state.user;
export const selectIsLoggedIn = (state: IState) =>
  !!selectUserInfo(state).token;
