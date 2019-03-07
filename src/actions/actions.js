export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const RESULTS_SCROLL = 'RESULTS_SCROLL';
export const RESULTS_FLUSH = 'RESULTS_FLUSH';

export function searchPerform(phrase) {
  return function(dispatch) {
    dispatch(apiRequest(true));

    return fetch(`${process.env.API_URI}?s=${phrase}&apikey=${process.env.API_KEY}`)
      .then(response =>
        response.json()
      )
      .then(json =>
        dispatch(apiSuccess(phrase, json))
      )
      .catch(error =>
        dispatch(apiFailure(error))
      )
      .finally(() =>
        dispatch(apiRequest(false))
      );
  }
}

export function apiRequest(isPendingResponse) {
  return { type: API_REQUEST, payload: isPendingResponse }
}

export function apiSuccess(phrase, json) {
  return {
    type: API_SUCCESS,
    payload: {
      phrase,
      json
    }
  };
}

export function apiFailure(error) {
  return { type: API_FAILURE, payload: error };
}

export function resultsScroll() {
  return { type: RESULTS_SCROLL };
}

export function resultsFlush() {
  return { type: RESULTS_FLUSH };
}
