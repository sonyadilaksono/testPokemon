import { applyMiddleware, createStore } from 'redux';

import rootReducer from './Reducers/index.js';
import logger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

const store = createStore(
   rootReducer,
   applyMiddleware(thunkMiddleware, logger),
);

export default store;
