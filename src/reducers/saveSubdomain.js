import createReducer from './../lib/createReducer';
import * as types from './../actions/types';

export const subdomain = createReducer(null, {
  [types.saveSubdomain](state, action){
    return action.subdomain;
  }
})
