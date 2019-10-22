import { User } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const loginUser = createAction<User>("User login");
