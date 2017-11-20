import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  middleware = [...middleware, createLogger()];
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
