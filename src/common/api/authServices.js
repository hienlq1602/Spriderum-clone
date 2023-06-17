import axiosClient from "./axiosClient";

const LOGIN_PATH = "/api/v1/auth/login";

const login = (username, password) => {
  return axiosClient.post(LOGIN_PATH, { username, password });
};

const REGISTER_PATH = "/api/v1/auth/register";

const register = (username, password, avatarUrl, fullName) => {
  return axiosClient.post(REGISTER_PATH, {username, password, avatarUrl, fullName});
}

const authServices = {
  login,
  register
};

export default authServices;
