//Actions
export const SET_CATEGORY = 'readable/categories/setCurrentCategory';

const initialCategoryState = 'none';

export default function currentCategory(state = initialCategoryState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export function setCurrentCategory(newCategory) {
  return dispatch => {
    dispatch(setCategory(newCategory));
  };
}

function setCategory(newCategory) {
  return { type: SET_CATEGORY, payload: newCategory };
}
