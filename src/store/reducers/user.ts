import utl from "../../utils/utils";
import { User } from "../../dtos/ArticleResponseDto";
import { onLogin } from "../actionCreators/loginAction";
import { createReducer } from "redux-act";
import { changeSettings, onLogout } from "../actionCreators/settingsAction";

const userData = utl.getUserDetails();

const initialState = {
  id: 0,
  email: "",
  createdAt: "",
  updatedAt: "",
  username: "",
  bio: "",
  image: "",
  token: ""
};

const storeState = {
  id: userData.id || initialState.id,
  email: userData.email || initialState.email,
  createdAt: userData.createdAt || initialState.createdAt,
  updatedAt: userData.updatedAt || initialState.updatedAt,
  username: userData.username || initialState.username,
  bio: userData.bio || initialState.bio,
  image: userData.image || initialState.image,
  token: userData.token || initialState.token
};

const userReducer = createReducer<User>({}, storeState);
userReducer
  .on(onLogin, (state, payload) => {
    return {
      ...state,
      ...payload
    };
  })
  .on(onLogout, () => {
    return {
      ...initialState
    };
  })
  .on(changeSettings, (state, payload) => {
    return {
      ...state,
      ...payload
    };
  });

export default userReducer;
