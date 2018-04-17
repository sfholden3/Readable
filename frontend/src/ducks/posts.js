import * as api from '../utils/api';

//Actions
export const FETCH_POSTS = 'readable/posts/fetchPosts';
export const FETCH_POST = 'readable/posts/fetchPost';
export const ADD_POST = 'readable/posts/addPost';
export const DELETE_POST = 'readable/posts/deletePost';
export const EDIT_POST = 'readable/posts/editPost';
export const EDIT_THIS_POST = 'readable/posts/editThisPost';
export const UPDATE_POST_SCORE = 'readable/posts/postVote';

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
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== action.payload)]
      };
    case EDIT_POST:
      const updatedPosts = state.posts.map(post => {
        if (post.id === action.payload.id) {
          return { ...post, ...action.payload };
        }
        return post;
      });
      return {
        ...state,
        posts: [...updatedPosts]
      };
    case EDIT_THIS_POST:
      return {
        ...state,
        post: {
          ...state.post,
          title: action.payload.title,
          body: action.payload.body
        }
      };
    case UPDATE_POST_SCORE:
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: action.payload.voteScore
        }
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

export function editThisPost(post) {
  return async dispatch => {
    dispatch(thisPostEdited(post));
  };
}

export function addPost(post) {
  return async dispatch => {
    await api.addPost(post);
    dispatch(postAdded(post));
  };
}

export function deletePost(postId) {
  return async dispatch => {
    await api.deletePost(postId);
    dispatch(postDeleted(postId));
  };
}

export function editPost(post) {
  return async dispatch => {
    await api.editPost(post);
    dispatch(postEdited(post));
  };
}

export function postVote(postId, option) {
  return async dispatch => {
    const post = await api.postVote(postId, option);
    dispatch(postEdited(post));
    dispatch(updatePostScore(post));
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

function postDeleted(postId) {
  return { type: DELETE_POST, payload: postId };
}

function postEdited(post) {
  return { type: EDIT_POST, payload: post };
}

function thisPostEdited(post) {
  return { type: EDIT_THIS_POST, payload: post };
}

function updatePostScore(post) {
  return { type: UPDATE_POST_SCORE, payload: post };
}
