import { User, LoginUserPayload } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const loginUser = createAction<LoginUserPayload>("Login user");

export const setUserData = createAction<User>("User data");
