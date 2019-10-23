import { createReducer } from "redux-act";
import { setLoginError } from "../actionCreators/loginAction";

const initialError = "";

const loginError = createReducer<string>({}, initialError);
loginError.on(setLoginError, (state, payload) => payload);

export default loginError;
