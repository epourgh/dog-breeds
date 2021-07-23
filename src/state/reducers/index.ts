import { combineReducers } from 'redux';
import HomeReducer from './home.reducer';

const reducers = combineReducers({
  Home: HomeReducer,
});

export default reducers;

// typescript instructions for code above that we're creating reducers,
// which internally calls some of our reducers
// eslint-disable-next-line no-unused-vars
export type RootState = ReturnType<typeof reducers extends (...args: any) => infer R ? R : any>;
