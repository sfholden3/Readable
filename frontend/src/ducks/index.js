import { combineReducers } from 'redux';
import categories from './categories';
import currentCategory from './currentCategory';

export default combineReducers({
  currentCategory,
  categories  
});
