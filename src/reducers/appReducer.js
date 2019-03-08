import { API_REQUEST, API_SUCCESS, API_FAILURE, LAST_PAGE_LOADED, PHRASE_SWITCH }
  from '../actions/actions';

const initState = {
  lastPhrase: '',
  lastLoadedPage: 0,
  lastYear: '',
  isPendingResponse: false,
  isLastPageLoaded: false
};

const appReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_REQUEST:
      nextState.isPendingResponse = payload;
      return nextState;

    case API_SUCCESS:
      nextState.lastPhrase = payload.phrase;
      nextState.lastLoadedPage = payload.page;
      nextState.lastYear = payload.year;
      nextState.isLastPageLoaded = false;
      return nextState;

    case LAST_PAGE_LOADED:
      nextState.isLastPageLoaded = true;
      return nextState;

    case PHRASE_SWITCH:
      nextState.lastPhrase = payload.phrase;
      nextState.lastLoadedPage = payload.lastLoadedPage;
      nextState.lastYear = payload.year;
      nextState.isLastPageLoaded = false;
      return nextState;

    default:
      return state;
  }
};

export default appReducer;
