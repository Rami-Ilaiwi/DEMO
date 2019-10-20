import utl from "../../utils/utils";
import { User } from "../../dtos/ArticleResponseDto";
import { SET_USER } from "../actionCreators/loginAction";
// import { createReducer, createAction } from "redux-act";

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

export default function userReducer(
  state = storeState,
  action: { type: string; payload: User }
): User {
  if (action.type === SET_USER) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
}

// interface s {
//   type: string;
//   payload: User;
// }

// const add = createAction<s>("Increase count");
// const reducer = createReducer<User>({}, storeState);
// reducer.on(add, (state, payload) => ({
//   ...state
// }));
// reducers
//   .on(setUser, (state, payload) => ({...state, ...payload}))
//   .on(logout, (state, payload) => ({}));
