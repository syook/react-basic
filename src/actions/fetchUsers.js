import * as types from './types';

export const fetchUsers = (users) => {
  return { type: types.fetchUsers, users: users }
}
