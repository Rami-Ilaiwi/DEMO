import { combineReducers } from "redux";
import user from "./user";
import { User } from "../../dtos/ArticleResponseDto";

export interface IState {
  user: User;
}

export default combineReducers({
  user
});
