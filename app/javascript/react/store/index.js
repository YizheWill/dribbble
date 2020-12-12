import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import RootReducer from '../reducer';
const preloadedState = {
  entities: {},
  session: {},
  user: {},
  ui: {},
  errors: {},
};
export default createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
