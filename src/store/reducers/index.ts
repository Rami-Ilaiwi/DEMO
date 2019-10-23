import { combineReducers } from "redux";
import user from "./user";
import { User } from "../../dtos/ArticleResponseDto";
import userError from "./loginError";

export interface IState {
  user: User;
  userError: string;
}

export default combineReducers<IState>({
  user,
  userError
});
