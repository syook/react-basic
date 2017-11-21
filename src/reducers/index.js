import { combineReducers } from 'redux';
import * as test from './test';
import * as saveToken from './saveToken';
import * as fetchUsers from './fetchUsers';

export default combineReducers(Object.assign(test, saveToken, fetchUsers));
