/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const initialState = {
  dogList: {
    data: {
      message: {},
      status: 'not loaded',
    },
    error: null,
    loading: false,
  },
};

const middleware = [thunk];

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
