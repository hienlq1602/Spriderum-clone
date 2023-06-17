import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/admin/articles";

const getHeaderConfig = () => {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
};

const getPost = (postId) => {
  return axiosClient.get(API_PATH + `/${postId}`);
};

//filter
const filterPosts = (page, size, body) => {
  return axiosClient.post(
    API_PATH + `/filter?page=${page}&size=${size}`,
    body,
    getHeaderConfig()
  );
};

//add
const addPost = (post) => {
  return axiosClient.post(API_PATH, post, getHeaderConfig());
};

//edit
const editPost = (postId, post) => {
  return axiosClient.put(API_PATH + `/${postId}`, post, getHeaderConfig());
};

//delete
const deletePost = (postId) => {
  return axiosClient.delete(API_PATH + `/${postId}`, getHeaderConfig());
};

const postAdminServices = {
  getPost,
  filterPosts,
  addPost,
  editPost,
  deletePost,
};

export default postAdminServices;
