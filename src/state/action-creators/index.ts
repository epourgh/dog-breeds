/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// an interface for dispatch from redux
import { Dispatch } from '@redux-d-ts';
import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

export const fetchDogList = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.GET_DOGS });

  try {
    // eslint-disable-next-line new-cap
    await axios({
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/list',
    }).then((response) => {
      const data = {
        message: {},
        success: 'loading',
      };
      let image;

      Object.values(response.data.message).forEach(async (dogBreed, index) => {
        image = await axios({ method: 'GET', url: `https://dog.ceo/api/breed/${dogBreed}/images/random` });
        data.message[dogBreed] = { key: index, name: dogBreed, image: image.data.message };
      });

      return data;
    }).then((data) => {
      dispatch({
        type: ActionType.GET_DOGS_SUCCESS,
        payload: data,
      });
    });
  } catch (err) {
    dispatch({
      type: ActionType.GET_DOGS_ERROR,
      payload: err.message,
    });
  }
};
