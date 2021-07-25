import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

interface DataReducerInterface {
    message?: any,
    status?: string
}

interface HomeReducerInterface {
    loading?: boolean;
    error?: string;
    success?: boolean;
    data?: DataReducerInterface
}

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: {
    message: {},
    status: 'not loaded',
  },
};

const HomeReducer = (
  state: any = initialState,
  action: Action,
): HomeReducerInterface => {
  switch (action.type) {
    case ActionType.GET_DOGS:
      return { loading: true, success: false, data: initialState };
    case ActionType.GET_DOGS_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case ActionType.GET_DOGS_ERROR:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export default HomeReducer;
