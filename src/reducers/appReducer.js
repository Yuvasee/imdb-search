import { API_REQUEST, API_SUCCESS, API_FAILURE, LAST_PAGE_LOADED, PHRASE_SWITCH }
  from '../actions/actions';

const initState = {
  lastPhrase: '',
  lastPage: 0,
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
      nextState.lastPage = payload.page;
      nextState.isLastPageLoaded = false;
      return nextState;

    case LAST_PAGE_LOADED:
      nextState.isLastPageLoaded = true;
      return nextState;

    case PHRASE_SWITCH:
      nextState.lastPhrase = payload.phrase;
      nextState.lastPage = payload.lastPage;
      nextState.isLastPageLoaded = false;
      return nextState;

    default:
      return state;
  }
};

export default appReducer;
