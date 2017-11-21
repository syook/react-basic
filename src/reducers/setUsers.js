import createReducer from './../lib/createReducer';
import * as types from './../actions/types';

export const users = createReducer([], {
  [types.setUsers](state, action){
    return action.users;
  }
})
