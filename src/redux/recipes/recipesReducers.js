import { combineReducers } from 'redux';
import types from '../types';

const recipesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_RECIPES:
      return payload.recipes;

    case types.ADD_RECIPE:
      return [...state, payload.recipe];

    case types.DELETE_RECIPE:
      return state.filter(el => el.id !== payload.id);

    case types.UPDATE_RECIPE:
      return payload.recipe;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_RECIPES:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  recipes: recipesReducer,
  filter: filterReducer,
});
