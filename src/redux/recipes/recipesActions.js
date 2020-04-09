import types from '../types';

export const fetchRecipes = recipes => ({
  type: types.FETCH_RECIPES,
  payload: {
    recipes,
  },
});

export const addRecipe = recipe => ({
  type: types.ADD_RECIPE,
  payload: {
    recipe,
  },
});

export const deleteRecipe = id => ({
  type: types.DELETE_RECIPE,
  payload: {
    id,
  },
});

export const changeRecipe = recipe => ({
  type: types.UPDATE_RECIPE,
  payload: {
    recipe,
  },
});

export const filterRecipes = value => ({
  type: types.FILTER_RECIPES,
  payload: {
    filter: value,
  },
});
