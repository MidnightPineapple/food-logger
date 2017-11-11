import { combineReducers } from 'redux';
import * as FoodReducers from './foods'
import NavReducer from './nav'

export default combineReducers(Object.assign({},
  FoodReducers,
  {nav:NavReducer},
))
