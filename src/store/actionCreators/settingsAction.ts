import { User, UserSettings } from "../../dtos/ArticleResponseDto";
import { createAction } from "redux-act";

export const changeSettings = createAction<UserSettings>(
  "[[Async]] Change settings"
);

export const logoutUser = createAction("User logout");
