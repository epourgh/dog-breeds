import { ActionType } from '../action-types/index';

interface GetDogsAction {
    type: ActionType.GET_DOGS;
}

interface GetDogsSuccessAction {
    type: ActionType.GET_DOGS_SUCCESS;
    payload: string;
}

interface GetDogsErrorAction {
    type: ActionType.GET_DOGS_ERROR;
    payload: string;
}

export type Action =
    | GetDogsAction
    | GetDogsSuccessAction
    | GetDogsErrorAction;
