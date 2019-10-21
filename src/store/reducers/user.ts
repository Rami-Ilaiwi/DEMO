import utl from "../../utils/utils";
import { User } from "../../dtos/ArticleResponseDto";
import { onLogin } from "../actionCreators/loginAction";
import { createReducer } from "redux-act";
import { changeSettings, onLogout } from "../actionCreators/settingsAction";

const userData = utl.getUserDetails();

const storeState = {
  id: userData.id || 0,
  email: userData.email || "",
  createdAt: userData.createdAt || "",
  updatedAt: userData.updatedAt || "",
  username: userData.username || "",
  bio: userData.bio || "",
  image: userData.image || "",
  token: userData.token || ""
};

const userReducer = createReducer<User>({}, storeState);
userReducer
  .on(onLogin, (state, payload) => {
    return {
      ...state,
      ...payload
    };
  })
  .on(onLogout, (state, payload) => {
    return {
      ...state,
      ...payload
    };
  })
  .on(changeSettings, (state, payload) => {
    return {
      ...state,
      ...payload
    };
  });

export default userReducer;
