import { User } from "../../dtos/ArticleResponseDto";

export const SET_USER = "SET_USER";

export function onLogin(user: User) {
  //   console.log(user);
  return { type: SET_USER, payload: user };
}
