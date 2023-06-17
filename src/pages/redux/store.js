import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import homeReducer from "../home/redux/homeReducer";
import detailPostReducer from "../detail/redux/detailReducer";

const store = createStore(
  combineReducers({
    posts: homeReducer,
    detailPost: detailPostReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
