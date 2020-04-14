/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { combineReducers } from 'redux';
import types from '../types';

// does not work!!!
// const recipesLocalStorage = localStorage.getItem('recipes');
// let recipes = [];

// if (recipesLocalStorage) {
//   recipes = JSON.parse(recipesLocalStorage);
// }

// const initialState = { recipes };

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

const creatingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case types.CREATING:
      return payload.isCreating;

    default:
      return state;
  }
};

const editingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case types.EDITING:
      return payload.isEditing;

    default:
      return state;
  }
};

export default combineReducers({
  data: recipesReducer,
  filter: filterReducer,
  isCreating: creatingReducer,
  isEditing: editingReducer,
});
