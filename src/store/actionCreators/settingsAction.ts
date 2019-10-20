import { User } from "../../dtos/ArticleResponseDto";

export function changeSettings(user: User) {
  //   console.log(user);
  return { type: "SET_USER", payload: user };
}
