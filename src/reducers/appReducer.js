import { unionWith, isEqual } from 'lodash';

import { API_REQUEST, API_SUCCESS, API_FAILURE } from '../actions/actions';

const initState = {
  lastPhrase: '',
  isPendingResponse: false
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
      return nextState;

    default:
      return state;
  }
};

export default appReducer;
