import { combineReducers } from "redux";
import user from "./user";
import { User } from "../../dtos/ArticleResponseDto";
import userError from "./loginError";
import { History } from "history";
import { connectRouter, RouterState } from "connected-react-router";

export interface IState {
  user: User;
  userError: string;
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers<IState>({
    user,
    userError,
    router: connectRouter(history)
  });

export default rootReducer;
