import axios from "axios";
import utl from "./utils";

const BASE_URL = "https://conduit.productionready.io/api";
interface params {
  endpoint: String;
  body?: {};
}

const noauthPost = (params: params) =>
  axios.post(`${BASE_URL}/${params.endpoint}`, params.body);

const noauthGet = (endpoint: string) => axios.get(`${BASE_URL}/${endpoint}`);
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
  axios.get(`${BASE_URL}/${endpoint}`, {
    headers: {
      Authorization: "Token " + utl.getToken(),
      "Content-Type": "application/json"
    }
  });

const put = (params: params) =>
  axios
    .put(`${BASE_URL}/${params.endpoint}`, params.body, {
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
  noauthGet,
  DELETE
};
