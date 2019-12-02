import axios from "axios";
import env from "config/env";

export const GET_ALL_COURSES = "[COURSE] Get All Courses";
export const GET_COURSE = "[COURSE] Get Course";

export const getAllCourses = () => (dispatch) => {
  axios.get(`${env.apiUrl}/cursos`).then(response => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: response.data
    })
  })
}

export const getCourse = (id) => (dispatch) => {
  axios.get(`${env.apiUrl}/cursos/${id}`).then(response => {
    return dispatch({
      type: GET_COURSE,
      course: response.data
    })
  })
}
