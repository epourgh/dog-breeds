/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// an interface for dispatch from redux
import { Dispatch } from '@redux-d-ts';
import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

export const fetchDogList = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.GET_DOGS });

  try {
    const request = 'https://dog.ceo/api/breeds/list';
    // eslint-disable-next-line new-cap
    const { data } = await axios({
      method: 'GET',
      url: request,
    });

    dispatch({
      type: ActionType.GET_DOGS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.GET_DOGS_ERROR,
      payload: err.message,
    });
  }
};
