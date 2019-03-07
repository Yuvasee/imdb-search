import store from '../store/store';

export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const LAST_PAGE_LOADED = 'LAST_PAGE_LOADED';
export const PHRASE_SWITCH = 'PHRASE_SWITCH';
export const RESULTS_FLUSH = 'RESULTS_FLUSH';

export function searchPerform(phrase, page = 1) {
  return function(dispatch) {
    const state = store.getState();

    if (
      phrase !== state.app.lastPhrase &&      // phrase changed
      Array.isArray(state.search[phrase]) &&  // new phrase alredy in store
      state.total[phrase].pagesLoaded > 0     // really?
    ) {
      dispatch(phraseSwitch(phrase, state.total[phrase].pagesLoaded));
      return Promise.resolve();
    }

    dispatch(apiRequest(true));

    return fetch(`${process.env.API_URI}?s=${phrase}&page=${page}&apikey=${process.env.API_KEY}`)
      .then(response =>
        response.json()
      )
      .then(json => {
        if (json.Response !== 'False') {
          dispatch(apiSuccess(phrase, json, page));
        } else {
          dispatch(lastPageLoaded());
        }
      })
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

export function apiSuccess(phrase, json, page) {
  return {
    type: API_SUCCESS,
    payload: {
      phrase,
      json,
      page
    }
  };
}

export function apiFailure(error) {
  return { type: API_FAILURE, payload: error };
}

export function lastPageLoaded() {
  return { type: LAST_PAGE_LOADED };
}

export function phraseSwitch(phrase, lastPage) {
  return {
    type: PHRASE_SWITCH,
    payload: {
      phrase,
      lastPage
    }
  };
}

export function resultsFlush() {
  return { type: RESULTS_FLUSH };
}
