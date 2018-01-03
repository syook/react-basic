import { combineReducers } from 'redux';
import * as test from './test';
import * as saveToken from './saveToken';
import * as saveSubdomain from './saveSubdomain';
import * as setUsers from './setUsers';

export default combineReducers(Object.assign(test, saveToken, setUsers, saveSubdomain));
