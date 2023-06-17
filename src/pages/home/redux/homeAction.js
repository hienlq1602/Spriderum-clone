import postServices from "../../../common/api/postServices";

export const POSTS_FETCH = "posts/fecth";

export const postsFetchAction = (posts) => {
  return {
    type: POSTS_FETCH,
    payload: posts,
  };
};
