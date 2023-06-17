import { DETAILPOST_FETCH } from "./detailAction";

const initialState = {
  detailPost: {},
};

const detailPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILPOST_FETCH:
      return {
        ...state,
        detailPost: action.payload,
      };
    default:
      return state;
  }
};

export default detailPostReducer;
