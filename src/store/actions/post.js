import axios from "axios";
import env from "config/env";


export const GET_ALL_POSTS = "[POST] Get All Posts";
export const GET_POST = "[POST] Get Post";

export const getAllPosts = () => (dispatch) => {
  axios.get(`${env.apiUrl}/posts`).then(response => {
    return dispatch({
      type: GET_ALL_POSTS,
      posts: response.data
    })
  })
}

export const getPost = (id) => (dispatch) => {
  axios.get(`${env.apiUrl}/posts/${id}`).then(response => {
    return dispatch({
      type: GET_POST,
      post: response.data
    })
  })
}
