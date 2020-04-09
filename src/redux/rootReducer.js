import { combineReducers } from 'redux';
import recipesReducers from './recipes/recipesReducers';

const rootReducer = combineReducers({
  recipes: recipesReducers,
});

export default rootReducer;
