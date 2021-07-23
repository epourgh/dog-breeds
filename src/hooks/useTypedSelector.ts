import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateExport } from '../state/index';

// eslint-disable-next-line import/prefer-default-export
export const useTypedSelector: TypedUseSelectorHook<RootStateExport> = useSelector;
