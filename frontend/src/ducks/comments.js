import * as api from '../utils/api';

//Actions
export const FETCH_COMMENTS = 'readable/comments/fetchPostComments';
export const ADD_POST_COMMENT = 'readable/comments/addPostComment';
export const DELETE_COMMENT = 'readable/comments/deleteComment';
export const FETCH_COMMENT = 'readable/comments/fetchComment';
export const EDIT_COMMENT = 'readable/comments/editComment';
export const EDIT_THIS_COMMENT = 'readable/comments/editThisComment';

const initialCommentState = {
  comments: [],
  comment: {}
};

export default function comments(state = initialCommentState, action) {
  switch (action.type) {
    case FETCH_COMMENTS: {
      return {
        comments: [...action.payload]
      };
    }
    case ADD_POST_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    }
    case DELETE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments.filter(comment => comment.id !== action.payload)]
      };
    }
    case FETCH_COMMENT: {
      return {
        ...state,
        comment: { ...action.payload }
      };
    }
    case EDIT_COMMENT: {
      const updatedComments = state.comments.map(comment => {
        if (comment.id === action.payload.id) {
          return { ...comment, ...action.payload };
        }
        return comment;
      });
      return {
        ...state,
        comments: [...updatedComments]
      };
    }
    case EDIT_THIS_COMMENT: {
      return {
        ...state,
        comment: {
          ...state.comment,
          body: action.payload.body
        }
      };
    }
    default: {
      return state;
    }
  }
}

export function fetchPostComments(postId) {
  return async dispatch => {
    const comments = await api.getPostComments(postId);
    dispatch(postCommentsFetched(comments));
  };
}

export function fetchComment(commentId) {
  return async dispatch => {
    const comment = await api.getCommentDetails(commentId);
    dispatch(commentFetched(comment));
  };
}

export function addPostComment(comment) {
  return async dispatch => {
    await api.addComment(comment);
    dispatch(addComment(comment));
  };
}

export function deleteComment(commentId) {
  return async dispatch => {
    await api.deleteComment(commentId);
    dispatch(commentRemoved(commentId));
  };
}

export function editComment(comment) {
  return async dispatch => {
    await api.editComment(comment);
    dispatch(commentEdited(comment));
  };
}

export function editThisComment(comment) {
  return async dispatch => {
    dispatch(thisCommentEdited(comment));
  };
}

export function commentVote(commentId, option) {
  return async dispatch => {
    const comment = await api.commentVote(commentId, option);
    dispatch(commentEdited(comment));
  };
}

function postCommentsFetched(comments) {
  return { type: FETCH_COMMENTS, payload: comments };
}

function commentFetched(comment) {
  return { type: FETCH_COMMENT, payload: comment };
}

function addComment(comment) {
  return { type: ADD_POST_COMMENT, payload: comment };
}

function commentRemoved(commentId) {
  return { type: DELETE_COMMENT, payload: commentId };
}

function commentEdited(comment) {
  return { type: EDIT_COMMENT, payload: comment };
}

function thisCommentEdited(comment) {
  return { type: EDIT_THIS_COMMENT, payload: comment };
}
