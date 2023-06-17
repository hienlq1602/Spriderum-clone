export const DETAILPOST_FETCH = "detailPost/fecth";

export const detailPostFetch = (detailPost) => {
  return {
    type: DETAILPOST_FETCH,
    payload: detailPost,
  };
};
