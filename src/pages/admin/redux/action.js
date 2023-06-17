import postAdminServices from "../../../common/api/postAdminServices";

export const GET_ADMIN_POSTS = "adminPosts/get";
export const ADD_ADMIN_POSTS = "adminPosts/add";
export const EDIT_ADMIN_POSTS = "adminPosts/edit";
export const DELETE_ADMIN_POSTS = "adminPosts/delete";

export const getAdminPosts = (posts) => {
  return {
    type: GET_ADMIN_POSTS,
    payload: posts,
  };
};

export const addAdminPost = (posts) => {
  return {
    type: ADD_ADMIN_POSTS,
    payload: posts,
  };
};

export const editAdminPost = (posts) => {
  return {
    type: EDIT_ADMIN_POSTS,
    payload: posts,
  };
};

export const delAdminPost = (posts) => {
  return {
    type: DELETE_ADMIN_POSTS,
    payload: posts,
  };
};
