import axios from "axios";
import utl from "./utils";

const BASE_URL = "https://conduit.productionready.io/api";
interface params {
  endpoint: String;
  body?: {};
}

const noauthPost = <T extends any>(params: params) =>
  axios.post<T>(`${BASE_URL}/${params.endpoint}`, params.body);

// const authPost = ({ endpoint, body }) =>
//   axios.post(`${BASE_URL}/${endpoint}`, body, {headers:{Authorization:"Token  "+getToken()}});

// const authGet = ({ endpoint }) => axios.get(`${BASE_URL}/${endpoint}`,{headers:{Authorization:"Token  "+getToken()});

const post = (params: params) => {
  return axios
    .post(`${BASE_URL}/${params.endpoint}`, params.body, {
      headers: {
        Authorization: "Token " + utl.getToken(),
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.data);
};

const DELETE = (params: params) => {
  return axios
    .delete(`${BASE_URL}/${params.endpoint}`, {
      headers: {
        Authorization: "Token " + utl.getToken(),
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.data);
};

const get = (endpoint: string) =>
  axios.get(
    `${BASE_URL}/${endpoint}`,
    utl.getToken()
      ? {
          headers: {
            Authorization: "Token " + utl.getToken(),
            "Content-Type": "application/json"
          }
        }
      : undefined
  );

const put = <T extends any>(params: params) =>
  axios
    .put<T>(`${BASE_URL}/${params.endpoint}`, params.body, {
      headers: {
        Authorization: "Token " + utl.getToken(),
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.data);

export default {
  // noauth:{get:authGet,post:authPost},
  post,
  get,
  put,
  noauthPost,
  DELETE
};
