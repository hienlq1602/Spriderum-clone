import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/articles";

const getHeaderConfig = () => {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
};

const getPosts = (page, size) => {
  return axiosClient.get(
    API_PATH + `?page=${page}&size=${size}`,
    getHeaderConfig()
  );
};

const getDetailPost = (postId) => {
  return axiosClient.get(API_PATH + `/${postId}`, getHeaderConfig());
};

const postServices = {
  getPosts,
  getDetailPost,
};

export default postServices;
