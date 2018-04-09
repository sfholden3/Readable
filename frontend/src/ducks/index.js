import { combineReducers } from 'redux';
import categories from './categories';
import currentCategory from './currentCategory';
import posts from './posts';
import comments from './comments';

export default combineReducers({
  currentCategory,
  categories,
  posts,
  comments  
});
