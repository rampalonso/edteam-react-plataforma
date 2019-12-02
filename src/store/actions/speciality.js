import axios from "axios";
import env from "config/env";

export const GET_ALL_SPECIALITIES = "[SPECIALITY] Get All Specialities";
export const GET_SPECIALITY = "[SPECIALITY] Get Speciality";

export const getAllSpecialities = () => (dispatch) => {
  axios.get(`${env.apiUrl}/especialidades`).then(response => {
    return dispatch({
      type: GET_ALL_SPECIALITIES,
      specialities: response.data
    })
  })
}

export const getSpeciality = (id) => (dispatch) => {
  axios.get(`${env.apiUrl}/especialidades/${id}`).then(response => {
    return dispatch({
      type: GET_SPECIALITY,
      speciality: response.data
    })
  })
}
