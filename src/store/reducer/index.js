import * as actionTypes from '../actions/actionTypes';
import {combineReducers} from 'redux';

const user_initalState = {
  current_user: null,
  isLoading: true,
};

const user_reducer = (state = user_initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        current_user: action.payload.current_user,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        current_user: null,
      };
    case actionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};

const root_reducer = combineReducers({
  user: user_reducer,
});

export default root_reducer;
