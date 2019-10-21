import { User } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const onLogin = createAction<User>("User login");
