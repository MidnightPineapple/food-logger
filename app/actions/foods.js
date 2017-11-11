import * as types from './types';
import AJAX from '../lib/ajax';
import { showToast } from '../lib/toast';

export function fetchFoods(query){
  return (dispatch, getState) => {
    let url = "https://api.nal.usda.gov";
    let route = "/ndb/search/"
    let params = {
      "api_key":"jwIdAVoZ2F75njuhNwiZ9S0OKTMnBnO6RB9BxaXp",
      "q":query,
      "sort":'r',
      "max":20,
      "format":"json",
    }
    return AJAX.get(url, route, params)
    .then(res=>{
      if(query==='') return [];
      if(res.error) {throw new Error(res.error.message)}
      if(res.errors) {dispatch(setSearchedFoods([])); throw new Error(res.errors.error[0].message)}
      return res.list.item
    }).then(items => dispatch(setSearchedFoods(items))).catch(err => showToast(err + "", "danger") )
  }
}


export function setSearchedFoods( food ) {
  return ({
    type:types.SET_SEARCHED_FOODS,
    food,
  })
}
