import { User } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const SET_USER = "SET_USER";

export const onLogin = createAction<User>("User login");
