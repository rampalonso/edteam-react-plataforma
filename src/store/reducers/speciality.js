import { GET_ALL_SPECIALITIES, GET_SPECIALITY } from "store/actions/speciality";

const initialState = {
  // courses: []
}
const specialityReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_SPECIALITIES) {
    return {
      ...state,
      specialities: action.specialities
    }
  }

  if (action.type === GET_SPECIALITY) {
    return {
      ...state,
      speciality: action.speciality
    }
  }

  return state;
}

export default specialityReducer;
