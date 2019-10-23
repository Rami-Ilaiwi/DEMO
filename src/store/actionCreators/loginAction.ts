import { User, LoginUserPayload } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const loginUser = createAction<LoginUserPayload>("[[Async]] Login user");

export const setUserData = createAction<User>("User data");

export const setLoginError = createAction<string>("Login error");
