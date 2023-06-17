import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/comments";

const getHeaderConfig = () => {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
};

const getComment = (postId, page, size) => {
  axiosClient.get(
    API_PATH + `/${postId}?page=${page}&size=${size}`,
    getHeaderConfig()
  );
};

const postComment = (postId, comment) => {
  axiosClient.post(API_PATH + `/${postId}`, comment, getHeaderConfig());
};

const commentServices = {
  getComment,
  postComment,
};

export default commentServices;
