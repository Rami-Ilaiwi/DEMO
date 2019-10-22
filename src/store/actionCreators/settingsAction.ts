import { User } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const changeSettings = createAction<User>("Change settings");
export const logoutUser = createAction("User logout");
