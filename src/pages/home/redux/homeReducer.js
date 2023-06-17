import { POSTS_FETCH } from "./homeAction";

const initialState = {
  posts: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default homeReducer;
