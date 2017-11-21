import createReducer from './../lib/createReducer';
import * as types from './../actions/types';

export const users = createReducer({}, {
  [types.fetchUsers](state, action){
    return action.users;
  }
})
