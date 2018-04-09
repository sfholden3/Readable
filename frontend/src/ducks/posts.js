import * as api from '../utils/api';

//Actions
export const FETCH_POSTS = 'readable/posts/fetchPosts';
export const FETCH_POST = 'readable/posts/fetchPost';
export const ADD_POST = 'readable/posts/addPost';

const initialPostState = {
  posts: [],
  post: {}
};

export default function posts(state = initialPostState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    default:
      return state;
  }
}

export function fetchPosts() {
  return async dispatch => {
    const posts = await api.getAllPosts();
    dispatch(postsFetched(posts));
  };
}

export function fetchPost(postId) {
  return async dispatch => {
    const post = await api.getPost(postId);
    dispatch(postFetched(post));
  };
}

export function addPost(post) {
  return async dispatch => {
    await api.addPost(post);
    dispatch(postAdded(post));
  };
}

function postsFetched(posts) {
  return { type: FETCH_POSTS, payload: posts };
}

function postFetched(post) {
  return { type: FETCH_POST, payload: post };
}

function postAdded(post) {
  return { type: ADD_POST, payload: post };
}
