import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreatorsExport } from '../state/index';

// eslint-disable-next-line import/prefer-default-export
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreatorsExport, dispatch);
};
