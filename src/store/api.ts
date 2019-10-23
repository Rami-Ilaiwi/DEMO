import AXIOS from "../utils/AXIOS";
import {
  LoginResponse,
  LoginValues,
  UserSettings,
  SaveSettingsResponse
} from "../dtos/ArticleResponseDto";

export const fetchLoginUser = (values: LoginValues) => {
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

export const fetchUserSettings = (values: UserSettings) => {
  return AXIOS.put<SaveSettingsResponse>({
    endpoint: "user",
    body: {
      user: {
        image: values.image,
        username: values.username,
        bio: values.bio,
        email: values.email,
        password: values.password || undefined
      }
    }
  });
};
