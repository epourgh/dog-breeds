import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

interface SampleReducer {
    loading?: boolean;
    error?: string | null;
    success?: boolean;
}

const initialState = {
  loading: false,
  error: null,
  success: false
};

const HomeReducer = (): SampleReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default HomeReducer;
