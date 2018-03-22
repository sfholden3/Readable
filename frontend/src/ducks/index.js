import { combineReducers } from 'redux';

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment({ message }) {
  return {
    type: ADD_COMMENT,
    message
  };
}

function comments(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { message } = action;
      return {
        ...state,
        [message]: message
      };
    default:
      return state;
  }
}

const initialCalendarState = {
  comments: []
};

export default comments;

/*export default combineReducers({
  calendar,
  food
});*/
