import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import maps from './maps';

const middlewares = [thunk];
const store = createStore(
  combineReducers({
    maps: maps,
  }),
  applyMiddleware(...middlewares)
);

export default store;