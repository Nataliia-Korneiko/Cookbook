import { combineReducers } from 'redux';
import types from '../types';

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

const editModalReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN_EDIT_MODAL:
      return true;
    case types.CLOSE_EDIT_MODAL:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  isCreateModalOpen: createModalReducer,
  isEditModalOpen: editModalReducer,
});
