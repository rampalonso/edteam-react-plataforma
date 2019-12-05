import { GET_ALL_TEACHERS } from "store/actions/teacher";

const initialState = {
  // courses: []
}
const teacherReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_TEACHERS) {
    return {
      ...state,
      teachers: action.teachers
    }
  }
  return state;
}

export default teacherReducer;
