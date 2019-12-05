import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  lessonReducer,
  courseReducer,
  postReducer,
  specialityReducer,
  teacherReducer
} from "./reducers";


export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    teacherReducer,
    lessonReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
