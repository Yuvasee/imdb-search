import { toast } from 'react-toastify';

import store from '../store/store';

export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const LAST_PAGE_LOADED = 'LAST_PAGE_LOADED';
export const PHRASE_SWITCH = 'PHRASE_SWITCH';
export const RESULTS_FLUSH = 'RESULTS_FLUSH';

export function searchPerform(phrase, page = 1, year) {
  return function(dispatch) {
    const query = `${phrase}@${year}`;

    if (canSwitchToStoredData(phrase, query)) {
      dispatch(phraseSwitch(phrase, store.getState().total[query].pagesLoaded));
      return Promise.resolve();
    }

    dispatch(apiRequest(true));

    return fetch(makeApiUri(phrase, page, year))
      .then(response =>
        response.json()
      )
      .then(json => {
        if (json.Response !== 'False') {
          if (page < 2) {
            toast.success(`Found ${json.totalResults} results`);
          }

          dispatch(apiSuccess(phrase, json, page, year));
          return;
        }

        if (page > 1 && json.Response === 'False') {
          dispatch(lastPageLoaded());

        } else {
          dispatch(apiFailure(json));
          toast.error('Nothing found. Try another conditions.');
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

export function apiSuccess(phrase, json, page, year) {
  return {
    type: API_SUCCESS,
    payload: {
      phrase,
      json,
      page,
      year
    }
  };
}

export function apiFailure(error) {
  return { type: API_FAILURE, payload: error };
}

export function lastPageLoaded() {
  return { type: LAST_PAGE_LOADED };
}

export function phraseSwitch(phrase, lastLoadedPage) {
  return {
    type: PHRASE_SWITCH,
    payload: {
      phrase,
      lastLoadedPage
    }
  };
}

export function resultsFlush() {
  return { type: RESULTS_FLUSH };
}

function canSwitchToStoredData(phrase, query) {
  const state = store.getState();
  return (
    phrase !== state.app.lastPhrase &&      // phrase changed
    Array.isArray(state.search[query]) &&  // new phrase alredy in store
    state.total[query].pagesLoaded > 0     // at least 1 page loaded
  );
}

function makeApiUri(phrase, page, year) {
  return `${process.env.API_URI}?apikey=${process.env.API_KEY}` +
  `&s=${phrase}&page=${page}` + (year ? `&y=${year}` : ``);
}
