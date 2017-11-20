import { combineReducers } from 'redux';
import * as test from './test';
import * as saveToken from './saveToken';

export default combineReducers(Object.assign(test, saveToken));
