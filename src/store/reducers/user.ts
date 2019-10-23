import utl from "../../utils/utils";
import { createReducer } from "redux-act";
import { User } from "../../dtos/ArticleResponseDto";
import { setUserData } from "../actionCreators/loginAction";
import { logoutUser } from "../actionCreators/settingsAction";

const user = utl.getUserDetails();

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
  id: user.id || initialState.id,
  email: user.email || initialState.email,
  createdAt: user.createdAt || initialState.createdAt,
  updatedAt: user.updatedAt || initialState.updatedAt,
  username: user.username || initialState.username,
  bio: user.bio || initialState.bio,
  image: user.image || initialState.image,
  token: user.token || initialState.token
};

const userReducer = createReducer<User>({}, storeState);
userReducer
  .on(setUserData, (state, payload) => payload)
  .on(logoutUser, () => {
    return {
      ...initialState
    };
  });
export default userReducer;
