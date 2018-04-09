import * as api from '../utils/api';

//Actions
export const FETCH_COMMENTS = 'readable/comments/fetchPostComments';
export const ADD_POST_COMMENT = 'readable/comments/addPostComment';

const initialCommentState = {
  comments: []
};

export default function comments(state = initialCommentState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        comments: [...action.payload]
      };
    case ADD_POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
}

export function fetchPostComments(postId) {
  return async dispatch => {
    const comments = await api.getPostComments(postId);
    dispatch(postCommentsFetched(comments));
  };
}

export function addPostComment(comment) {
  return async dispatch => {
    await api.addComment(comment);
    dispatch(addComment(comment));
  };
}

function postCommentsFetched(comments) {
  return { type: FETCH_COMMENTS, payload: comments };
}

function addComment(comment) {
  return { type: ADD_POST_COMMENT, payload: comment };
}
