import types from '../types';

export const openCreateModal = () => ({
  type: types.OPEN_CREATE_MODAL,
  payload: true,
});

export const closeCreateModal = () => ({
  type: types.CLOSE_CREATE_MODAL,
  payload: false,
});

export const openEditModal = () => ({
  type: types.OPEN_CREATE_MODAL,
  payload: true,
});

export const closeEditModal = () => ({
  type: types.CLOSE_CREATE_MODAL,
  payload: false,
});
