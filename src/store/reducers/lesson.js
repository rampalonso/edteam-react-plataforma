import { GET_LESSON } from "store/actions/lesson";

const initialState = {
  // courses: []
}
const lessonReducer = (state = initialState, action) => {
  if (action.type === GET_LESSON) {
    return {
      ...state,
      lesson: action.lesson
    }
  }
  return state;
}

export default lessonReducer;
