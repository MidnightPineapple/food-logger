import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedFoods = createReducer([], {
  [types.SET_SEARCHED_FOODS](state, action) {
    let newState = [...action.food]
    return newState;
  },

})
