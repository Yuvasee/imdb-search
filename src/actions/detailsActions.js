import { toast } from 'react-toastify';

import store from '../store/store';

export const API_DETAILS_REQUEST = 'API_DETAILS_REQUEST';
export const API_DETAILS_SUCCESS = 'API_DETAILS_SUCCESS';
export const API_DETAILS_FAILURE = 'API_DETAILS_FAILURE';
export const DETAILS_SHOW_MODAL = 'DETAILS_SHOW_MODAL';

export function detailsShow(movieId) {
  return function(dispatch) {

    dispatch(detailsShowModal(movieId));

    if (isDetailsInStore(movieId)) {
      return Promise.resolve();
    }

    dispatch(apiDetailsRequest(true));

    return fetch(makeApiDetailsUri(movieId))
      .then(response =>
        response.json()
      )
      .then(json => {
        if (json.Response !== 'False') {
          dispatch(apiDetailsSuccess(movieId, json));
          return;

        } else {
          dispatch(apiDetailsFailure(movieId));
          dispatch(detailsShowModal(false));
          toast.error('Internal error, impossible to get movie details.');
        }
      })
      .catch(error => {
        dispatch(apiDetailsFailure(movieId, error));
        dispatch(detailsShowModal(false));
      })
      .finally(() =>
        dispatch(apiDetailsRequest(false))
      );
  }
}

export function apiDetailsRequest(isPendingResponse) {
  return {
    type: API_DETAILS_REQUEST,
    payload: isPendingResponse
  };
}

export function apiDetailsSuccess(movieId, json) {
  return {
    type: API_DETAILS_SUCCESS,
    payload: {
      movieId,
      json,
    }
  };
}

export function apiDetailsFailure(movieId, error) {
  return {
    type: API_FAILURE,
    payload: {
      movieId,
      error
    }
  };
}

export function detailsShowModal(movieId) {
  console.log(movieId);

  return {
    type: DETAILS_SHOW_MODAL,
    payload: movieId
  };
}

function makeApiDetailsUri(movieId) {
  return `${process.env.API_URI}?apikey=${process.env.API_KEY}&i=${movieId}`;
}

function isDetailsInStore(movieId) {
  const details = store.getState().details[movieId];
  return (typeof details === 'object' && details !== null);
}
