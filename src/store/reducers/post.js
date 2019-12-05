import { GET_ALL_POSTS, GET_POST } from "store/actions/post";

const initialState = {
  // posts: []
}
const postReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }

  return state;
}

export default postReducer;
