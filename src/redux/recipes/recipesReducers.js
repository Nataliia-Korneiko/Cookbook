/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { combineReducers } from 'redux';
import types from '../types';

const recipesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_RECIPES:
      return payload.data;

    case types.ADD_RECIPE:
      return [...state, payload.data];

    case types.DELETE_RECIPE:
      return state.filter(recipe => recipe.id !== payload.id);

    // Does not work!!!
    case types.UPDATE_RECIPE:
      // const updateRecipe = state.map(recipe =>
      //   recipe.id === payload.id
      //     ? { ...recipe, text, description, level }
      //     : recipe,
      // );
      return payload.data;
    // return [(payload.data: updateRecipe)];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

const createModalReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN_CREATE_MODAL:
      return true;
    case types.CLOSE_CREATE_MODAL:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  data: recipesReducer,
  filter: filterReducer,
  isCreateModalOpen: createModalReducer,
});
