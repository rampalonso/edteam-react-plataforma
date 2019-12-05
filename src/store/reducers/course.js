import { GET_ALL_COURSES, GET_COURSE } from "store/actions/course";

const initialState = {
  // courses: []
}
const courseReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses
    }
  }

  if (action.type === GET_COURSE) {
    return {
      ...state,
      course: action.course
    }
  }
  return state;
}

export default courseReducer;
