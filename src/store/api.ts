import AXIOS from "../utils/AXIOS";
import { LoginResponse, LoginValues } from "../dtos/ArticleResponseDto";

const fetchLoginUser = (values: LoginValues) => {
  return AXIOS.noauthPost<LoginResponse>({
    endpoint: "users/login",
    body: {
      user: {
        email: values.email,
        password: values.password
      }
    }
  });
};

export default fetchLoginUser;
