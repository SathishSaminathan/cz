import {ADD_USER, REMOVE_USER, TOGGLE_LOADING} from './actionTypes';

export const setUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      current_user: user,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const toggleLoading = (status) => {
  return {
    type: TOGGLE_LOADING,
    status,
  };
};
