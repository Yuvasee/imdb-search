import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';

import app from '../reducers/appReducer';
import search from '../reducers/searchReducer';
import total from '../reducers/totalReducer';

import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  app,
  search,
  total
});

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;
