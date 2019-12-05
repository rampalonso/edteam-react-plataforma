import axios from "axios";
import env from "config/env";

export const GET_ALL_TEACHERS = "[TEACHER] Get All Teachers";

export const getAllTeachers = () => (dispatch) => {
  axios.get(`${env.apiUrl}/profesores`).then(response => {
    return dispatch({
      type: GET_ALL_TEACHERS,
      teachers: response.data
    })
  })
}
