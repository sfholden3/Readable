import * as api from '../utils/api';

//Actions
export const FETCH_CATEGORIES = 'readable/categories/fetchCategories';

const initialCategoryState = {
  categories: []
};

export default function categories(state = initialCategoryState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export function fetchCategories() {
  return async dispatch => {
    const categories = await api.getAllCategories();
    dispatch(categoriesFetched(categories));
  };
}

function categoriesFetched(categories) {
  return { type: FETCH_CATEGORIES, payload: categories };
}
