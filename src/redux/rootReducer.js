import { combineReducers } from 'redux';
import recipesReducers from './recipes/recipesReducers';
import globalReducers from './global/globalReducers';

const rootReducer = combineReducers({
  recipes: recipesReducers,
  global: globalReducers,
});

export default rootReducer;
