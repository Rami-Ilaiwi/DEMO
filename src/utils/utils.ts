const getUserDetails = () => {
  try {
    return JSON.parse(localStorage.getItem("userData") as string).user || {};
  } catch (w) {
    return {};
  }
};

const getToken = () => {
  return localStorage.getItem("userToken");
};

export default {
  getUserDetails,
  getToken
};
