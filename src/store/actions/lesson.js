import axios from "axios";
import env from "config/env";

export const GET_LESSON = "[LESSON] Get Lesson";

export const getLesson = (id) => (dispatch) => {
  axios.get(`${env.apiUrl}/clases/${id}`).then(response => {
    return dispatch({
      type: GET_LESSON,
      lesson: response.data
    })
  })
}
