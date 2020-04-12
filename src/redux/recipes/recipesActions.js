import shortid from 'shortid';
import types from '../types';

const moment = require('moment');

export const fetchRecipes = data => ({
  type: types.FETCH_RECIPES,
  payload: {
    data,
  },
});

// -- with versions --
// export const addRecipe = recipe => ({
//   type: types.ADD_RECIPE,
//   payload: {
//     recipe: {
//       id: shortid.generate(),
//       versions: {
//         ...recipe,
//         createDate: moment().format('MMMM Do YYYY, h:mm:ss A'),
//       },
//     },
//   },
// });

export const addRecipe = recipe => ({
  type: types.ADD_RECIPE,
  payload: {
    data: {
      id: shortid.generate(),
      ...recipe,
      createDate: moment().format('MMMM Do YYYY, h:mm:ss A'),
    },
  },
});

export const deleteRecipe = id => ({
  type: types.DELETE_RECIPE,
  payload: {
    id,
  },
});

// export const updateRecipe = (text, description, level) => ({
export const updateRecipe = id => ({
  type: types.UPDATE_RECIPE,
  payload: {
    data: {
      // recipe,
      // text,
      // description,
      // level,
      id,
      editDate: moment().format('MMMM Do YYYY, h:mm:ss A'),
    },
  },
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: {
    filter: value,
  },
});

export const openCreateModal = () => ({
  type: types.OPEN_CREATE_MODAL,
  payload: true,
});

export const closeCreateModal = () => ({
  type: types.CLOSE_CREATE_MODAL,
  payload: false,
});
